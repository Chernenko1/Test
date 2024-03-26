import axios from "axios"

export const getBooks = async (name: string,sort: string, category: string) => {
    const {data} = await axios.get(`https://www.googleapis.com/books/v1/volumes?q=intitle:${name}+subject:${category}&maxResults=30&orderBy${sort}&key=AIzaSyBq5vlNepCzq44T-ohOge8ilN3q6d3H7eU`)
    return data
}