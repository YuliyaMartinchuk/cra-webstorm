import React from "react";

// @ts-ignore
export const Post = () => {
    const sum = (a: number, b: number) => {
        return a + b
    }
    return (
            <h2>Post</h2>
            <button onSubmit={() => sum( a: 2, b: 9)}></button>
    )
}