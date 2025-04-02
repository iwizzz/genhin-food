'use client';
import * as React from 'react';
import styles from "./style.module.scss";

export interface IFooterProps {
}

export function Footer (props: IFooterProps) {
  return (
    <footer className={styles.footer}>
      All rights reserved &copy; 2025
    </footer>
  );
}
