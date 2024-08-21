import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Polygon,
  Popup,
  TileLayer,
} from "react-leaflet";
import { pupUps, uzbData } from "../Constants/uzb";

const center: [number, number] = [40.12442709646927, 67.87769254689282];

function Map() {
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/149/149059.png",
    iconSize: [30, 30],
  });

  return (
    <div style={{ height: "500px", width: "100%" }}>
      <MapContainer
        center={center}
        zoom={7}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
        }}
      >
        <TileLayer
          url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=Wnj1VB2TZlK2apMlLIne"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        {pupUps.map((e) => (
          <Marker
            key={e?.id}
            position={e.geo as [number, number]}
            icon={customIcon}
          >
            <Popup minWidth={300}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h3>Hodimlar soni</h3>
                  {e?.tumanlar?.map((tuman) => (
                    <div
                      key={tuman?.name}
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        width: "100%",
                      }}
                    >
                      <span
                        style={{
                          marginBottom: "5px",
                          marginRight: "auto",
                          fontWeight: "bold",
                        }}
                      >
                        {tuman.name}:
                      </span>
                      <span style={{ fontSize: "18px" }}>
                        {tuman.number}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
        {uzbData.features.map((state) => {
          const coordinates: [number, number][] =
            state.geometry.coordinates[0].map((item: number[]) => [
              item[1],
              item[0],
            ]);

          return (
            <Polygon
              key={state.properties.ADM1_EN}
              positions={coordinates}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
