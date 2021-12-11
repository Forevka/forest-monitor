<template>
  <div id="map" style="height: 75vh; width: 100%;">

  </div>
  <AcceptForestReport v-model="show" @confirm="confirm" @cancel="cancel" @descriptionChanges="descriptionChanges">
    <template v-slot:title>Підтвердіть дію</template>
    <p>Ви додаєте нову ділянку</p>
  </AcceptForestReport>

  <!--<div style="height: 75vh; width: 100%;">
    <l-map
      v-model="zoom"
      v-model:zoom="zoom"
      :center="[49.829446, 24.024567]"
      @move="log('move')"
    >
      <l-tile-layer
        url=""
      ></l-tile-layer>
      
      <l-marker :lat-lng="[49.829446, 24.024567]">
        <l-popup>
          Львів
        </l-popup>
      </l-marker>

      <l-control-layers />
    </l-map>
  </div>-->
</template>
<script>
import {
  LMap,
  LIcon,
  LTileLayer,
  LMarker,
  LControlLayers,
  LTooltip,
  LPopup,
  LPolyline,
  LPolygon,
  LRectangle,
  LFeatureGroup
} from "@vue-leaflet/vue-leaflet";
import AcceptForestReport from "@/components/AcceptForestReport.vue";
import "leaflet/dist/leaflet.css";
import axios from '../../utils/axios'


export default {
  components: {
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
    LPopup,
    LPolyline,
    LPolygon,
    LRectangle,
    AcceptForestReport
  },
  data: () => ({
    zoom: 15.0,
    iconWidth: 25,
    iconHeight: 40,
    show: false,
  }),
  computed: {
    iconUrl() {
      return `https://placekitten.com/${this.iconWidth}/${this.iconHeight}`;
    },
    iconSize() {
      return [this.iconWidth, this.iconHeight];
    },
  },
  async mounted() {
    var greenIcon = new L.icon({
      iconUrl: 'https://www.pngall.com/wp-content/uploads/2017/05/Map-Marker-Free-Download-PNG.png',
      iconSize: [64, 64],
    })
    var cloudmade = new L.TileLayer("https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}", {maxZoom: 30});
    var map = new L.Map('map', {layers: [cloudmade], center: new L.LatLng(49.829446, 24.024567), zoom: 12.0 });

    var cityMarkers = new L.FeatureGroup();
		map.addLayer(cityMarkers);

    var markers = []

    await axios
      .get('/city')
      .then((response) => {
        console.log('response: ', response.data)
        markers = response.data.map(x => {
          let m = null
          try {
            m = L.marker([Number(x.lat), Number(x.lon)], {icon: greenIcon})
          }
          catch (err) {console.log(err)}
          if (m) return m;
        })
      })
      .catch((error) => {
        console.error(error)
      })

    console.log(markers)

    for(let marker of markers) {
			marker.addTo(map)	
		}

    var drawnItems = new L.FeatureGroup();
		map.addLayer(drawnItems);
    this.drawnItems = drawnItems;

    var polyLayers = [];

    await axios
      .get('/forest')
      .then((response) => {
        console.log('response: ', response.data)
        polyLayers = response.data.map(x => {
          let p = L.polygon(x.polygon);
          if (x.description)
            p.bindPopup(x.description);
            
          p.description = x.description;
          p.id = x.id;
          return p;
        })
      })
      .catch((error) => {
        console.error(error)
      })

    console.log(polyLayers)

		// Add the layers to the drawnItems feature group 
		for(let layer of polyLayers) {
			drawnItems.addLayer(layer);	
		}

		// Set the title to show on the polygon button
    L.drawLocal.draw.toolbar.buttons.circle = "Виділити круглу область";
    L.drawLocal.draw.toolbar.buttons.marker = "Поставити маркер";
    L.drawLocal.draw.toolbar.buttons.polygon = "Виділити нестандартну область";
    L.drawLocal.draw.toolbar.buttons.polyline = "Виділити лінією";
    L.drawLocal.draw.toolbar.buttons.rectangle = "Виділити прямокутником";

		var drawControl = new L.Control.Draw({
			position: 'topright',
			draw: {
				polyline: false,
				polygon: {
					allowIntersection: false,
					showArea: true,
					drawError: {
						color: '#b00b00',
						timeout: 1000
					},
					shapeOptions: {
						color: '#bada55'
					}
				},
				circle: false,
				marker: false
			},
			edit: {
				featureGroup: drawnItems,
				remove: true
			}
		});

		map.addControl(drawControl);

    var me = this;

		map.on('draw:created', function (e) {
			var type = e.layerType,
				layer = e.layer;

			if (type === 'marker') {
				layer.bindPopup('A popup!');
			}

			drawnItems.addLayer(layer);
      me.show = true;
      me.lastLayer = layer;
      console.log(layer)
		});

		map.on('draw:edited', function (e) {
			var layers = e.layers;
			var countOfEditedLayers = 0;
			layers.eachLayer(function(layer) {
				countOfEditedLayers++;
			});
			console.log("Edited " + countOfEditedLayers + " layers");
		});

    map.on('draw:deleted', function (e) {
      console.log(e)
      let deletedPolygons = Object.values(e.layers._layers).map(x => x.id)
      console.log(deletedPolygons)
      deletedPolygons.forEach(async (polygonId) => {
        await axios.delete(`/forest/${polygonId}`)
      });
    })
  },
  methods: {
    log(a) {
      console.log(a);
    },
    async confirm() {
      // some code...
      this.show = false
      
      console.log(this.lastLayer)

      await axios
        .get('/forest')
        .then(async (response) => {
          console.log(this.lastLayer._latlngs)
          let lastPolygon = response.data[response.data.length - 1]
          let lastPolygonId = lastPolygon != undefined ? Number(lastPolygon.id) + 1 : 1
          await axios
            .post('/forest', {
              id: lastPolygonId,
              polygon: this.lastLayer._latlngs[0],
              description: this.lastLayer.description
            })
          this.lastLayer.id = lastPolygonId;
        })
        .catch((error) => {
          console.error(error)
        })
    },
    cancel(close) {
      // some code...
      this.drawnItems.removeLayer(this.lastLayer)
      close()
    },
    descriptionChanges(description) {
      if (this.lastLayer) {
        this.lastLayer.description = description;
        this.lastLayer.bindPopup(description);
      }
    }
  },
};

    
</script>

<style lang="scss" scoped>
</style>