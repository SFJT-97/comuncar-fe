/* eslint-disable no-unused-vars */
// src/Components/ProjectsSection.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaMapMarkerAlt, FaProjectDiagram, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { MapContainer, TileLayer, GeoJSON, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet.heat';

// Adjust this path to where your provinces_with_projects.geojson file is located
// If it's in the 'public' folder, you can use a direct path like '/provinces_with_projects.geojson'
// If it's in src/data/, ensure your build tool handles JSON imports, or fetch it as shown below.
const GEOJSON_FILE_PATH = '/provinces_with_projects.geojson'; // Assuming it's placed in the 'public' folder or accessible root

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const accordionVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
};

const detailVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: { height: 'auto', opacity: 1, transition: { duration: 0.3 }, ease: 'easeOut' },
  exit: { height: 0, opacity: 0, transition: { duration: 0.2 }, ease: 'easeOut' },
};

const projects = [
  { name: 'Veladero', location: 'San Juan (MAGSA)' },
  { name: 'Paramillos', location: 'Mendoza (Deprominsa)' },
  { name: 'Las Flechas', location: 'San Juan (Deprominsa)' },
  { name: 'Cerro Cuadrado', location: 'Santa Cruz (Deprominsa)' },
  { name: 'Anchoris', location: 'Mendoza (Portal Resources Inc.)' },
  { name: 'Tendal', location: 'La Rioja (Latin American Minerals SA)' },
  { name: 'Campesino Norte', location: 'Neuquén (E.M. Inc. SA)' },
  { name: 'Campana Mauhida', location: 'Neuquén (MSC S.A.)' },
  { name: 'Las Águilas', location: 'San Luis (Castillian Resources)' },
  { name: 'Pachón', location: 'San Juan (Falconbridge)' },
  { name: 'Geotermia Copahue', location: 'Neuquén (Geotermal One)' },
  { name: 'Casposo', location: 'San Juan (Troy Resources)' },
  { name: 'Los Azules', location: 'San Juan (Mc Ewen Mining)' },
];

const normalizeProvince = (raw) =>
  raw
    .split(' (')[0]
    .replace('Sta. Cruz', 'Santa Cruz')
    .replace('Provincia de ', '')
    .replace('Provincia del ', '')
    .replace('Ciudad Autónoma de ', '')
    .trim();

const CustomAttribution = () => {
  const map = useMap();

  useEffect(() => {
    // Check if the map and its attribution control are available
    if (map && map.attributionControl) {
      // This is the key line: it removes the "A Leaflet 🇺🇦" prefix.
      map.attributionControl.setPrefix(false);
    }
  }, [map]);

  return null; // This component does not render any DOM elements
};

const ProjectsSection = () => {
  const [expanded, setExpanded] = useState(null);
  const [selectedProvinceProjects, setSelectedProvinceProjects] = useState([]);
  const [selectedProvinceName, setSelectedProvinceName] = useState('');
  const [provincesGeoJSONData, setProvincesGeoJSONData] = useState(null);
  const [loadingGeoJSON, setLoadingGeoJSON] = useState(true);
  const [errorGeoJSON, setErrorGeoJSON] = useState(null);

  useEffect(() => {
    const fetchGeoJSON = async () => {
      try {
        const response = await fetch(GEOJSON_FILE_PATH);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProvincesGeoJSONData(data);
      } catch (error) {
        console.error("Error fetching GeoJSON:", error);
        setErrorGeoJSON(error);
      } finally {
        setLoadingGeoJSON(false);
      }
    };

    fetchGeoJSON();
  }, []);

  const toggleExpand = index => {
    setExpanded(expanded === index ? null : index);
  };

  const onEachFeature = (feature, layer) => {
    layer.on({
      click: (e) => {
        const provinceName = feature.properties.name;
        const projectsInProvince = feature.properties.projects || [];
        setSelectedProvinceName(provinceName);
        setSelectedProvinceProjects(projectsInProvince);

        // Optionally, zoom to the clicked province
        e.target._map.fitBounds(e.target.getBounds());
      },
      mouseover: (e) => {
        e.target.setStyle({
          weight: 3,
          color: '#666',
          dashArray: '',
          fillOpacity: 0.7
        });
      },
      mouseout: (e) => {
        // Reset style to default
        e.target.setStyle(provinceStyle(feature));
      }
    });
  };

  const provinceStyle = (feature) => {
    return {
      fillColor: feature.properties.project_count > 0 ? '#2A1F5B' : '#A5D6A7', // Green if projects exist, lighter green otherwise
      weight: 1,
      opacity: 1,
      color: 'white',
      dashArray: '3',
      fillOpacity: 0.5
    };
  };

  return (
    <motion.section
      className="surface py-12"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <h2 className="headline-large text-center mb-10 text-brand-primary flex items-center justify-center gap-2">
        <FaProjectDiagram className="text-3xl" />
        Proyectos Destacados
      </h2>

      <div className="max-w-7xl mx-auto mb-8">
        <MapContainer className="round-2xl" center={[-34.6037, -64]} zoom={4} style={{ height: '500px', width: '100%', zIndex: 0 }}>
          <TileLayer
            url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png"
            attribution='&copy; OpenStreetMap contributors + Instituto Geográfico Nacional'
          />
          <CustomAttribution />

          {loadingGeoJSON && <p>Loading map data...</p>}
          {errorGeoJSON && <p>Error loading map data: {errorGeoJSON.message}</p>}
          {provincesGeoJSONData && (
            <GeoJSON
              data={provincesGeoJSONData}
              style={provinceStyle}
              onEachFeature={onEachFeature}
            />
          )}
        </MapContainer>

        {selectedProvinceName && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="mt-4 p-4 rounded-lg shadow-md bg-primary-container/20 text-on-surface"
          >
            <h3 className="text-xl font-bold mb-2">Proyectos en {selectedProvinceName}</h3>
            {selectedProvinceProjects.length > 0 ? (
              <ul className="list-disc pl-5">
                {selectedProvinceProjects.map((project, index) => (
                  <li key={index}>{project}</li>
                ))}
              </ul>
            ) : (
              <p>No hay proyectos registrados para esta provincia.</p>
            )}
          </motion.div>
        )}
      </div>

    <div className="max-w-4xl mx-auto space-y-4">
      {Object.entries(
        projects.reduce((acc, p) => {
          const prov = normalizeProvince(p.location);
          acc[prov] = acc[prov] || [];
          acc[prov].push(p);
          return acc;
        }, {})
      ).map(([province, provProjects], index) => {
        const isOpen = expanded === index;

        return (
          <motion.div
            key={index}
            className="relative bg-gradient-to-r from-surface to-primary-container/20 rounded-lg border border-outline-variant overflow-hidden"
            layout
            transition={{ layout: { duration: 0.3, ease: 'easeInOut' } }}
          >
            <motion.button
              layout
              className="w-full flex items-center justify-between p-6 text-left hover:bg-primary-container/10 transition-colors duration-200"
              onClick={() => toggleExpand(index)}
              aria-expanded={isOpen}
            >
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-primary" />
                <h3 className="text-lg font-bold text-on-surface">
                  {province} ({provProjects.length})
                </h3>
              </div>
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen ? (
                  <FaChevronUp className="text-primary" />
                ) : (
                  <FaChevronDown className="text-primary" />
                )}
              </motion.div>
            </motion.button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="px-6 pb-6"
                >
                  <ul className="list-disc pl-6 text-on-surface-variant">
                    {provProjects.map((p, i) => (
                      <li key={i}>{p.name}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-full -translate-y-12 translate-x-12" />
          </motion.div>
        );
      })}
    </div>
    </motion.section>
  );
};

export default ProjectsSection;