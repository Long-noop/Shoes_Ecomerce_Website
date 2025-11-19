import React from 'react'

const Wishlist = () => {
  return (
    <section id="wishlist" class="content-section">
                    <h2 class="section-title">My Wishlist</h2>
                    <p class="section-subtitle">Your favorite items saved for later</p>

                    <div class="wishlist-grid">
                        <div class="wishlist-item">
                            <button class="wishlist-remove"><i class="fas fa-times"></i></button>
                            <div class="wishlist-image">
                                <img src="https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=200" alt="Product"/>
                            </div>
                            <h4 class="wishlist-title">Puma RS-X Trainers</h4>
                            <div class="wishlist-price">$110.00</div>
                            <button class="btn-add-cart">Add to Cart</button>
                        </div>

                        <div class="wishlist-item">
                            <button class="wishlist-remove"><i class="fas fa-times"></i></button>
                            <div class="wishlist-image">
                                <img src="https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=200" alt="Product"/>
                            </div>
                            <h4 class="wishlist-title">Reebok Classic Leather</h4>
                            <div class="wishlist-price">$95.00</div>
                            <button class="btn-add-cart">Add to Cart</button>
                        </div>
                    </div>
                </section>
  )
}

export default Wishlist