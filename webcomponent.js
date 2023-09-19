       
        const pictureData = [
            {id: "10112254", src: "https://images.asics.com/is/image/asics/1203A320_020_SB_FR_GLB?$productlist$", title: '10112254'},
            {id: "10126739", src: "https://images.asics.com/is/image/asics/1203A320_250_SB_FR_GLB?$productlist$", title: '10126739'},
            {id: "1203A275_102", src: "https://images.asics.com/is/image/asics/1203A275_102_SB_FR_GLB?$productlist$", title: '1203A275_102'},
            {id: "1203A320_251", src: "https://images.asics.com/is/image/asics/1203A320_251_SB_FR_GLB?$productlist$", title: '1203A320_251'},
            {id: "1203A275_103", src: "https://images.asics.com/is/image/asics/1203A275_103_SB_FR_GLB?$productlist$", title: '1203A275_103'},
            {id: "1011B691_001", src: "https://images.asics.com/is/image/asics/1011B691_001_SB_FR_GLB?$productlist$", title: '1011B691_001'},
            {id: "1011B691_401", src: "https://images.asics.com/is/image/asics/1011B691_401_SB_FR_GLB?$productlist$", title: '1011B691_401'}
            
            // Add more data entries here
        ];


class ShopPictureTiles extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const shadow = this.attachShadow({ mode: 'open' });
        const pictureGrid = document.createElement('div');
        pictureGrid.classList.add('picture-grid');

        pictureData.forEach((item, index) => {
            const tile = document.createElement('div');
            tile.classList.add('tile');
            tile.innerHTML = `
                <div class="tile-content">
                    <p class="product-title">${item.title}</p>
                    <img src="${item.src}" alt="${item.title}">
                </div>
            `;
            // Attach a click event listener to each tile
            tile.addEventListener('click', () => {
                // Handle tile click (e.g., navigate to product page)
                alert(`Clicked on ${item.title}`);
            });
            pictureGrid.appendChild(tile);

            // Add a CSS class to create a new row after every 5 pictures
            if ((index + 1) % 5 === 0) {
                tile.classList.add('new-row-start');
            }
        });

        const style = document.createElement('style');
        style.textContent = `
            .picture-grid {
                display: grid;
                grid-template-columns: repeat(5, 1fr); /* Five columns per row */
                gap: 10px;
            }

            .tile {
                width: 200px;
                height: 200px;
                border: 1px solid #ccc;
                cursor: pointer;
                text-align: center;
                position: relative;
                border-radius: 10px;
                box-shadow: 0 8px 10px rgba(0, 0, 0, 0.1);
            }

            .tile-content {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                text-align: center;
                padding: 10px;
            }

            .product-title {
                font-weight: bold;
                color: darkblue; /* Set the text color to dark blue */
            }

            img {
                max-width: 70%;
                max-height: 70%;
                border-radius: 10px; /* Apply rounded edges to the image as well */
            }
        `;

        shadow.appendChild(style);
        shadow.appendChild(pictureGrid);
    }
}

if (!customElements.get('shop-picture-tiles')) {
    customElements.define('shop-picture-tiles', ShopPictureTiles);
}