import React from 'react'

export default function Review({ params }) {
    return (
        <div>Review of Product {params.productId} and Review {params.reviewId}</div>
    )
}
