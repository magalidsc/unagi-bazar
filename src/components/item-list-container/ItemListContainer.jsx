import React, { useState } from "react";
import { useEffect } from "react"
import ItemList from "../items/ItemList"
import "./style.css";
import { db } from "../../services/firebase/firebase"
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {

    const { categoryId } = useParams()
    const [productsAvailable, setProductsAvailable] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (categoryId !== undefined) {
            setLoading(true)
            getDocs(query(collection(db, 'item'), where('category', '==', categoryId))).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {

                    return { id: doc.id, ...doc.data() }
                })
                setProductsAvailable(products)
            }).catch((error) => {
                console.log("error searching items", error)
            }).finally(() => {
                setLoading(false)
            })


        } else {
            setLoading(true)
            getDocs(collection(db, 'item')).then((querySnapshot) => {
                const products = querySnapshot.docs.map(doc => {

                    return { id: doc.id, ...doc.data() }
                })
                setProductsAvailable(products)
            }).catch((error) => {
                console.log("error searching items", error)
            }).finally(() => {
                setLoading(false)
            })
        }
        return (() => {
            setProductsAvailable([])
        })

    }, [categoryId])

    if (loading) {
        return <p>cargando...</p>
    }

    return (
        <div className="container-list container-lg">
            <ItemList productsAvailable={productsAvailable} />
        </div>
    )
}



export default ItemListContainer;