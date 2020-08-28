import React, { useEffect } from "react";
import "./maps.scss";

export default function Maps({ Ref }) {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 37.5452619, lng: 127.0569794 },
      zoom: 17,
    });
    const card = document.getElementById("pac-card");
    const input = document.getElementById("pac-input");
    map.controls[window.google.maps.ControlPosition.TOP_RIGHT].push(card);
    const autocomplete = new window.google.maps.places.Autocomplete(input);
    // Bind the map's bounds (viewport) property to the autocomplete object,
    // so that the autocomplete requests use the current map bounds for the
    // bounds option in the request.
    autocomplete.bindTo("bounds", map);
    // Set the data fields to return when the user selects a place.
    autocomplete.setFields(["address_components", "geometry", "icon", "name"]);
    const infowindow = new window.google.maps.InfoWindow();
    const infowindowContent = document.getElementById("infowindow-content");
    infowindow.setContent(infowindowContent);
    const marker = new window.google.maps.Marker({
      map,
      anchorPoint: new window.google.maps.Point(0, -29),
      position: map.center,
      zoom: 13,
    });

    infowindowContent.children["place-icon"].src =
      "https://maps.gstatic.com/mapfiles/place_api/icons/geocode-71.png";
    infowindowContent.children["place-name"].textContent = "제강빌딩";
    infowindowContent.children["place-address"].textContent =
      "대한민국 서울특별시 성동구 성수2가3동 289-10";
    infowindow.open(map, marker);
    autocomplete.addListener("place_changed", () => {
      infowindow.close();
      marker.setVisible(false);
      const place = autocomplete.getPlace();

      if (!place.geometry) {
        // User entered the name of a Place that was not suggested and
        // pressed the Enter key, or the Place Details request failed.
        window.alert("No details available for input: '" + place.name + "'");
        return;
      }

      // If the place has a geometry, then present it on a map.
      if (place.geometry.viewport) {
        map.fitBounds(place.geometry.viewport);
      } else {
        map.setCenter(place.geometry.location);
        map.setZoom(17); // Why 17? Because it looks good.
      }
      marker.setPosition(place.geometry.location);
      marker.setVisible(true);
      let address = "";

      if (place.address_components) {
        address = [
          (place.address_components[0] &&
            place.address_components[0].short_name) ||
            "",
          (place.address_components[1] &&
            place.address_components[1].short_name) ||
            "",
          (place.address_components[2] &&
            place.address_components[2].short_name) ||
            "",
        ].join(" ");
      }
      infowindowContent.children["place-icon"].src = place.icon;
      infowindowContent.children["place-name"].textContent = place.name;
      infowindowContent.children["place-address"].textContent = address;
      infowindow.open(map, marker);
    });
  }, []);
  return (
    <>
      <input
        ref={Ref}
        id="pac-input"
        type="text"
        placeholder="대한민국 서울특별시 성동구 성수2가3동 289-10"
      />
      <div id="map"></div>
      <div id="infowindow-content">
        <img src="" width="16" height="16" id="place-icon" />
        <span id="place-name" className="title"></span>
        <br />
        <span id="place-address"></span>
      </div>
    </>
  );
}
