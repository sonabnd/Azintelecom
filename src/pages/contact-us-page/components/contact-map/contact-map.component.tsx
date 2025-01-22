import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import css from './contact-map.module.scss';

const libraries = ['places'];

const mapContainerStyle = {
  width: '100%',
  height: '720px',
};

const center = {
  lat: 40.380565248338804,
  lng: 49.8332817067833 
};

const markerIcon = {
  url: '/src/assets/images/statics/map-textİcon.png', 
};

const mapStyles = [
    {
      featureType: 'all',
      elementType: 'geometry',
      stylers: [
        {
          visibility: 'simplified',
        },
      ],
    },
    {
      featureType: 'road',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'on',
        },
      ],
    },
    {
      featureType: 'poi',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'landscape',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    {
      featureType: 'transit',
      elementType: 'labels',
      stylers: [
        {
          visibility: 'off',
        },
      ],
    },
    { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
    { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
    {
      featureType: "administrative.locality",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#263c3f" }],
    },
    {
      featureType: "poi.park",
      elementType: "labels.text.fill",
      stylers: [{ color: "#6b9a76" }],
    },
    {
      featureType: "road",
      elementType: "geometry",
      stylers: [{ color: "#38414e" }],
    },
    {
      featureType: "road",
      elementType: "geometry.stroke",
      stylers: [{ color: "#212a37" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: "#9ca5b3" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry",
      stylers: [{ color: "#746855" }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#1f2835" }],
    },
    {
      featureType: "road.highway",
      elementType: "labels.text.fill",
      stylers: [{ color: "#f3d19c" }],
    },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#2f3948" }],
    },
    {
      featureType: "transit.station",
      elementType: "labels.text.fill",
      stylers: [{ color: "#d59563" }],
    },
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.fill",
      stylers: [{ color: "#515c6d" }],
    },
    {
      featureType: "water",
      elementType: "labels.text.stroke",
      stylers: [{ color: "#17263c" }],
    },
    {
      featureType: "road",
      elementType: "labels.text.fill",
      stylers: [{ color: 'white' }],  
    },
  ];

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
  
    const options = {
      disableDefaultUI: true,
      zoomControl: false,
      styles: mapStyles,
    };

    const dynamicHeight = window.innerWidth <= 991 ? '480px' : '720px';
    
    return (
      <div className={css.map}
      style={{
        overflow: 'hidden',
        borderRadius: '40px',
        position: 'relative',
        background:
          'radial-gradient(49.81% 49.81% at 50% 50.19%, rgba(13, 18, 28, 0.32) 0%, rgba(13, 18, 28, 0.64) 100%)',
      }}
      >
        <GoogleMap
                  mapContainerStyle={{
                    ...mapContainerStyle,
                    height: dynamicHeight,
                  }}
          zoom={17}
          center={center}
          options={options}
        >
          <div style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',     
        }}>
          <Marker position={center} icon={markerIcon} />
        
        </div>
        </GoogleMap>
      </div>
    );
  };

export default ContactMapComponent;
