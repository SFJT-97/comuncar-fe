// /* eslint-disable no-unused-vars */
// // src/Components/HeroSection.jsx
// import React, { useRef, useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { Link } from 'react-router-dom';
// import * as THREE from 'three';

// const sectionVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
// };

// const HeroSection = () => {
//   const mountRef = useRef(null);
//   const [isTextureLoaded, setIsTextureLoaded] = useState(false);

//   useEffect(() => {
//     let scene, camera, renderer, plaque;
//     let animationFrameId;

//     const currentMount = mountRef.current;
//     if (!currentMount) return;

//     // Scene Setup
//     scene = new THREE.Scene();
//     scene.background = null; // Ensure transparent background

//     // Camera Setup
//     camera = new THREE.PerspectiveCamera(75, currentMount.offsetWidth / currentMount.offsetHeight, 0.1, 1000);
//     camera.position.set(0, 0, 2); // Camera positioned to view plaque

//     // Renderer Setup
//     renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
//     renderer.setPixelRatio(window.devicePixelRatio); // Improve sharpness
//     renderer.setSize(currentMount.offsetWidth, currentMount.offsetHeight);
//     renderer.outputColorSpace = THREE.SRGBColorSpace; // Ensure accurate colors
//     currentMount.appendChild(renderer.domElement);

//     // Lighting Setup
//     const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Soft ambient light
//     scene.add(ambientLight);
//     const directionalLight = new THREE.DirectionalLight(0xffffff, 3); // Stronger directional light
//     directionalLight.position.set(5, 5, 5); // Position for 3D effect
//     scene.add(directionalLight);
//     const pointLight = new THREE.PointLight(0xffffff, 0.5, 10); // Highlights
//     pointLight.position.set(-2, 2, 5);
//     scene.add(pointLight);

//     // Texture Loading and Plaque Creation
//     const textureLoader = new THREE.TextureLoader();
//     textureLoader.load(
//       '/comunicarlogo.webp',
//       (texture) => {
//         setIsTextureLoaded(true);
//         texture.colorSpace = THREE.SRGBColorSpace; // Correct color space

//         // Calculate dimensions
//         const imageAspectRatio = texture.image.width / texture.image.height;
//         const plaqueHeight = 1.5;
//         const plaqueWidth = plaqueHeight * imageAspectRatio;
//         const plaqueDepth = 0.075; // Depth for 3D effect

//         // Create 3D geometry with BoxGeometry
//         const geometry = new THREE.BoxGeometry(plaqueWidth, plaqueHeight, plaqueDepth);

//         // Create material for front and back faces
//         const textureMaterial = new THREE.MeshStandardMaterial({
//           map: texture,
//           transparent: true, // Respect alpha channel
//           metalness: 0.1, // Slight metallic sheen
//           roughness: 0.5, // Moderate roughness
//         });
//         // Material for sides
//         const sideMaterial = new THREE.MeshStandardMaterial({
//           color: 0x333333, // Dark gray for sides
//           metalness: 0.1,
//           roughness: 0.5,
//         });

//         // Assign materials to each face of the box
//         const materials = [
//           sideMaterial, // Right
//           sideMaterial, // Left
//           sideMaterial, // Top
//           sideMaterial, // Bottom
//           textureMaterial, // Front
//           textureMaterial, // Back (now uses texture)
//         ];

//         plaque = new THREE.Mesh(geometry, materials);
//         scene.add(plaque);

//         // Start animation
//         animate();
//       },
//       undefined,
//       (error) => {
//         console.error('Texture loading error:', error);
//         setIsTextureLoaded(false);
//       }
//     );

//     // Animation Loop
//     const animate = () => {
//       animationFrameId = requestAnimationFrame(animate);
//       if (plaque) {
//         plaque.rotation.y += 0.005; // Rotate only around Y-axis
//       }
//       renderer.render(scene, camera);
//     };

//     // Handle Window Resizing
//     const onWindowResize = () => {
//       if (currentMount) {
//         renderer.setSize(currentMount.offsetWidth, currentMount.offsetHeight);
//         camera.aspect = currentMount.offsetWidth / currentMount.offsetHeight;
//         camera.updateProjectionMatrix();
//         renderer.render(scene, camera);
//       }
//     };
//     window.addEventListener('resize', onWindowResize);

//     // Cleanup
//     return () => {
//       window.removeEventListener('resize', onWindowResize);
//       cancelAnimationFrame(animationFrameId);
//       if (currentMount && renderer.domElement) {
//         currentMount.removeChild(renderer.domElement);
//       }
//       if (plaque) {
//         plaque.geometry.dispose();
//         plaque.material.forEach((mat) => mat.dispose());
//       }
//       if (renderer) {
//         renderer.dispose();
//       }
//     };
//   }, []);

//   return (
//     <motion.section
//       className="surface text-center py-16 px-4"
//       initial="hidden"
//       animate="visible"
//       variants={sectionVariants}
//     >
//       <div className="flex flex-col md:flex-row items-center justify-around">
//         <div className="flex flex-col items-start">
//           <h1 className="headline-large mb-4 text-left text-brand-primary">
//             Liderazgo en Comunicación Minera
//           </h1>
//           <p className="body-large mb-8 max-w-2xl mx-auto text-left">
//             Conectamos voluntades a través de estrategias de relaciones institucionales, comunitarias y con medios, impulsando el éxito de proyectos mineros.
//           </p>
//           <Link to="/contact" className="btn-brand">
//             Contáctanos
//           </Link>
//         </div>
//         <div
//           className="flex flex-col items-center justify-center relative mt-8 md:mt-0"
//           style={{ width: '100%', maxWidth: '24rem', height: '24rem' }}
//         >
//           <div ref={mountRef} className="w-full h-full flex items-center justify-center">
//             {!isTextureLoaded && (
//               <img
//                 src="/comunicarlogo.webp"
//                 alt="Comunicar Consultora"
//                 className="w-full h-full object-contain rounded-4xl"
//               />
//             )}
//           </div>
//         </div>
//       </div>
//     </motion.section>
//   );
// };

// export default HeroSection;

/* eslint-disable no-unused-vars */
// src/Components/HeroSection.jsx
import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import * as THREE from 'three';

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const HeroSection = () => {
  const mountRef = useRef(null);
  const [isTextureLoaded, setIsTextureLoaded] = useState(false);

  useEffect(() => {
    let scene, camera, renderer, plaque, pointLight;
    let animationFrameId;

    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene Setup
    scene = new THREE.Scene();
    scene.background = null; // Ensure transparent background

    // Camera Setup
    camera = new THREE.PerspectiveCamera(75, currentMount.offsetWidth / currentMount.offsetHeight, 0.1, 1000);
    camera.position.set(0, 0, 2); // Camera positioned to view plaque

    // Renderer Setup
    renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(window.devicePixelRatio); // Improve sharpness
    renderer.setSize(currentMount.offsetWidth, currentMount.offsetHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace; // Ensure accurate colors
    currentMount.appendChild(renderer.domElement);

    // Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Reduced ambient light for more contrast
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 3); // Softer directional light
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);
    pointLight = new THREE.PointLight(0xffffff, 10.0, 10); // Brighter point light for metallic highlights
    pointLight.position.set(-5, 0, 5); // Initial position
    scene.add(pointLight);

    // Texture Loading and Plaque Creation
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      '/comunicarlogo.webp',
      (texture) => {
        setIsTextureLoaded(true);
        texture.colorSpace = THREE.SRGBColorSpace; // Correct color space

        // Calculate dimensions
        const imageAspectRatio = texture.image.width / texture.image.height;
        const plaqueHeight = 1.5;
        const plaqueWidth = plaqueHeight * imageAspectRatio;
        const plaqueDepth = 0.1; // Depth for 3D effect

        // Create 3D geometry with BoxGeometry
        const geometry = new THREE.BoxGeometry(plaqueWidth, plaqueHeight, plaqueDepth);

        // Create material for front and back faces
        const textureMaterial = new THREE.MeshStandardMaterial({
          map: texture,
          transparent: true, // Respect alpha channel
          metalness: 0.3, // Increased for more metallic look
          roughness: 0.7, // Slightly smoother for shinier surface
        });
        // Material for sides
        const sideMaterial = new THREE.MeshStandardMaterial({
          color: 0x333333, // Dark gray for sides
          metalness: 0.3,
          roughness: 0.4,
        });

        // Assign materials to each face of the box
        const materials = [
          sideMaterial, // Right
          sideMaterial, // Left
          sideMaterial, // Top
          sideMaterial, // Bottom
          textureMaterial, // Front
          textureMaterial, // Back
        ];

        plaque = new THREE.Mesh(geometry, materials);
        scene.add(plaque);

        // Start animation
        animate();
      },
      undefined,
      (error) => {
        console.error('Texture loading error:', error);
        setIsTextureLoaded(false);
      }
    );

    // Animation Loop
    let time = 0;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      if (pointLight) {
        // Rotate point light in a circular path around the Y-axis
        time += 0.02; // Control rotation speed
        const radius = 2; // Distance from plaque
        pointLight.position.x = radius * Math.cos(time);
        pointLight.position.z = radius * Math.sin(time);
        pointLight.position.y = 0.5; // Slight elevation for better highlights
      }
      renderer.render(scene, camera);
    };

    // Handle Window Resizing
    const onWindowResize = () => {
      if (currentMount) {
        renderer.setSize(currentMount.offsetWidth, currentMount.offsetHeight);
        camera.aspect = currentMount.offsetWidth / currentMount.offsetHeight;
        camera.updateProjectionMatrix();
        renderer.render(scene, camera);
      }
    };
    window.addEventListener('resize', onWindowResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', onWindowResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      if (plaque) {
        plaque.geometry.dispose();
        plaque.material.forEach((mat) => mat.dispose());
      }
      if (renderer) {
        renderer.dispose();
      }
    };
  }, []);

  return (
    <motion.section
      className="surface text-center py-16 px-4"
      initial="hidden"
      animate="visible"
      variants={sectionVariants}
    >
      <div className="flex flex-col md:flex-row items-center justify-around">
        <div className="flex flex-col items-start">
          <h1 className="headline-large mb-4 text-left text-brand-primary">
            Liderazgo en Comunicación Minera
          </h1>
          <p className="body-large mb-8 max-w-2xl mx-auto text-left">
            Conectamos voluntades a través de estrategias de relaciones institucionales, comunitarias y con medios, impulsando el éxito de proyectos mineros.
          </p>
          <Link to="/contact" className="btn-brand">
            Contáctanos
          </Link>
        </div>
        <div
          className="flex flex-col items-center justify-center relative mt-8 md:mt-0"
          style={{ width: '100%', maxWidth: '24rem', height: '24rem' }}
        >
          <div ref={mountRef} className="w-full h-full flex items-center justify-center">
            {!isTextureLoaded && (
              <img
                src="/comunicarlogo.webp"
                alt="Comunicar Consultora"
                className="w-full h-full object-contain rounded-4xl"
              />
            )}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;