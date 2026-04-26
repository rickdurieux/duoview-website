'use client';

import { useEffect } from 'react';

const MEDIA_SELECTOR = 'img, video, canvas, picture';

export default function MediaProtection() {
  useEffect(() => {
    const findProtectedMedia = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        return null;
      }

      return target.closest(MEDIA_SELECTOR);
    };

    const handleContextMenu = (event: MouseEvent) => {
      if (findProtectedMedia(event.target)) {
        event.preventDefault();
      }
    };

    const handleDragStart = (event: DragEvent) => {
      if (findProtectedMedia(event.target)) {
        event.preventDefault();
      }
    };

    const handleSelectStart = (event: Event) => {
      if (findProtectedMedia(event.target)) {
        event.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('dragstart', handleDragStart);
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('dragstart', handleDragStart);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  return null;
}
