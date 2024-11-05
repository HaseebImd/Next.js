import React from 'react'

export default function ProductReviews({ params }) {
    console.log(params);
    return (
        <div>Product {params.productId} Reviews</div>
    )
}
