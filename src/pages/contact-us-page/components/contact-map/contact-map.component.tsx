// import css from './contact-map.module.scss'

// const ContactMapComponent = () => {

//   return (
//     <div className={css.contact}>
//         <section>
//             <div className="container">
//                 <div className={css.map}>

//                 </div>
//             </div>
//         </section>
//     </div>
//   )
// }

// export default ContactMapComponent


import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 7.2905715, 
  lng: 80.6337262, 
};

const ContactMapComponent = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyA9XjKunhKb4Gkgg4MLTgQ0pXCenEwSIsM',
    libraries,
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default ContactMapComponent;


// import { useEffect } from "react";
// import css from './contact-map.module.scss';

// const ContactMapComponent = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA9XjKunhKb4Gkgg4MLTgQ0pXCenEwSIsM&callback=initMap`;
//     script.async = true;
//     script.defer = true;
//     document.body.appendChild(script);

//     window.initMap = () => {
//       const mapOptions = {
//         center: { lat: 40.4093, lng: 49.8671 }, // Bakı koordinatları
//         zoom: 14,
//         styles: mapStyle, // Stil tətbiqi
//         disableDefaultUI: true, // Bütün interfeys elementlərini gizlədir
//         mapTypeControl: false, // "Map" və "Satellite" düymələrini gizlədir
//         fullscreenControl: false, // Tam ekran düyməsini gizlədir
//         streetViewControl: false, // Street View düyməsini gizlədir
//         zoomControl: false, // Zoom düymələrini gizlədir
//       };

//       new window.google.maps.Map(document.getElementById("map"), mapOptions);
//     };

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   return (
//     <div className={css.contact}>
//       <section>
//         <div className="container">
//           <div id="map" className={css.map} style={{ height: "400px", width: "100%" }}>
//             {/* Xəritə buraya yüklənəcək */}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default ContactMapComponent;

// const mapStyle = [
//   {
//     "elementType": "geometry",
//     "stylers": [{ "color": "#212121" }]
//   },
//   {
//     "elementType": "labels.text.fill",
//     "stylers": [{ "color": "#757575" }]
//   },
//   {
//     "featureType": "all",
//     "elementType": "labels",
//     "stylers": [{ "visibility": "on" }]
//   }
// ];

