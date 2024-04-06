import React, { useEffect } from 'react';
import Profile from '../Images/LinkedIn.jpeg';
import '../App.css';
import SceneInit from '../Components/SceneInit';
import * as THREE from 'three';

function HomePage() {
    useEffect(() => {
        const canvasId = 'myThreeJSCanvas';
        const canvas = document.getElementById(canvasId);
        console.log('Canvas Element:', canvas); // Log canvas element
        if (!canvas) {
            console.error(`Canvas element with ID '${canvasId}' not found.`);
            return;
        }

        const test = new SceneInit(canvasId);
        test.initialize();
        test.animate();
    
        const boxGeometry = new THREE.BoxGeometry(16, 16, 16);
        const boxMaterial = new THREE.MeshNormalMaterial();
        const boxMesh = new THREE.Mesh(boxGeometry, boxMaterial);
    
        test.scene.add(boxMesh);
    }, []);

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div>
                    {/* Adjusted width and height of the canvas */}
                    <canvas id="myThreeJSCanvas" />
                </div>
            </div>         

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '50vh' }}>
                <div style={{ borderRadius: '50%', overflow: 'hidden', border: '4px solid black', width: '300px', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img src={Profile} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;
