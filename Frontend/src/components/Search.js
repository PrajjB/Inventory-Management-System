import React, { useState, useEffect } from 'react';
import styles from './Search.module.css';
import axios from 'axios';

export default function Search() {

  const [barcode, setBarcode] = useState('');
  const [product, setProduct] = useState(null);
  const [error, setError] = useState('');
  const [shake, setShake] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const handleSearch = async () => {
    try {
      const res = await axios.get(`http://localhost:3001/products/barcode/${barcode}`);
      setProduct(res.data);
      setError('');
    } catch (err) {
      setProduct(null);
      setError('Product not found.');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  useEffect(() => {
  if (error) {
    setShake(true);
    setFadeOut(false);

    const shakeTimer = setTimeout(() => {
      setShake(false);
      setFadeOut(true);
    }, 600); 

    const clearErrorTimer = setTimeout(() => {
      setFadeOut(false);
      setError('');
    }, 3000); 

    return () => {
      clearTimeout(shakeTimer);
      clearTimeout(clearErrorTimer);
    };
  }
}, [error]);
    
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Search the barcode for the item you are looking for!</h1>
            <div className={styles.display}>
                <div className={styles.formControl}>
                    <input type="text" value={barcode} onChange={(e) => setBarcode(e.target.value)} onKeyDown={handleKeyDown} required />
                    <label>
                    <span style={{ transitionDelay: "0ms" }}>E</span>
                    <span style={{ transitionDelay: "25ms" }}>n</span>
                    <span style={{ transitionDelay: "50ms" }}>t</span>
                    <span style={{ transitionDelay: "75ms" }}>e</span>
                    <span style={{ transitionDelay: "100ms" }}>r</span>
                    <span style={{ transitionDelay: "125ms" }}> </span>
                    <span style={{ transitionDelay: "150ms" }}>P</span>
                    <span style={{ transitionDelay: "175ms" }}>r</span>
                    <span style={{ transitionDelay: "200ms" }}>o</span>
                    <span style={{ transitionDelay: "225ms" }}>d</span>
                    <span style={{ transitionDelay: "250ms" }}>u</span>
                    <span style={{ transitionDelay: "275ms" }}>c</span>
                    <span style={{ transitionDelay: "300ms" }}>t</span>
                    <span style={{ transitionDelay: "325ms" }}> </span>
                    <span style={{ transitionDelay: "350ms" }}>B</span>
                    <span style={{ transitionDelay: "375ms" }}>a</span>
                    <span style={{ transitionDelay: "400ms" }}>r</span>
                    <span style={{ transitionDelay: "425ms" }}>c</span>
                    <span style={{ transitionDelay: "450ms" }}>o</span>
                    <span style={{ transitionDelay: "475ms" }}>d</span>
                    <span style={{ transitionDelay: "500ms" }}>e</span>
                    </label>
                </div>
            </div>

            {product && (
                <>
                    <div className={styles.card}>
                        <div class={styles.card__title}>Product Details</div>
                            <div className={styles.card__data}>
                                <div class={styles.card__right}>
                                <div className={styles.item}>Name</div>
                                <div className={styles.item}>Price</div>
                                <div className={styles.item}>Barcode</div>
                                </div>
                                <div className={styles.card__left}>
                                <div className={styles.item}>{product.ProductName}</div>
                                <div className={styles.item}>₹{product.ProductPrice}</div>
                                <div className={styles.item}>{product.ProductBarcode}</div>
                            </div>
                        </div>
                    </div>
                </>
            )}
    
            {error && (
                <>
                    <div>
                        <div className={`${styles.error} ${error ? styles.shake : ''} ${fadeOut ? styles.fadeOut : ''}`}>
                            <div className={styles.error__icon}>
                                <svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m13 13h-2v-6h2zm0 4h-2v-2h2zm-1-15c-1.3132 0-2.61358.25866-3.82683.7612-1.21326.50255-2.31565 1.23915-3.24424 2.16773-1.87536 1.87537-2.92893 4.41891-2.92893 7.07107 0 2.6522 1.05357 5.1957 2.92893 7.0711.92859.9286 2.03098 1.6651 3.24424 2.1677 1.21325.5025 2.51363.7612 3.82683.7612 2.6522 0 5.1957-1.0536 7.0711-2.9289 1.8753-1.8754 2.9289-4.4189 2.9289-7.0711 0-1.3132-.2587-2.61358-.7612-3.82683-.5026-1.21326-1.2391-2.31565-2.1677-3.24424-.9286-.92858-2.031-1.66518-3.2443-2.16773-1.2132-.50254-2.5136-.7612-3.8268-.7612z" fill="#393a37"></path></svg>
                            </div>
                            <div className={styles.error__title}><p style={{ color: 'red', marginTop: '20px' }}>{error}</p></div>
                        </div>
                    </div> 
                </>
            )}
            
        </div>
    )
}