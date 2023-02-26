import { useState, useEffect, FormEvent } from 'react'


export const IngredientForm = ({dialogRef}: any) => {

    const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

        // ...
    }

    return (
    <>
        <form onSubmit={handleSubmit}>

        </form>
    </>
    )
}

export default IngredientForm;
