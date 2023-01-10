import React, { FC } from 'react';
import styles from './MapComponent.module.css';

interface MapComponentProps {}

const MapComponent: FC<MapComponentProps> = () => (
  <div className={styles.MapComponent}>
    MapComponent Component
  </div>
);

export default MapComponent;
