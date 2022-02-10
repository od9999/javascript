import React, { useRef, useEffect, useState } from 'react'

function useDidUpdate(callback) {
  const hasMount = useRef(false);
  useEffect(() => {
    if (hasMount.current) {
      callback();
    } else {
      hasMount.current = true;
    }
  });
}