import React from "react"
import fetch from "isomorphic-fetch"
import Error from "next/error"
import StoryList from "../components/StoryList"
import Layout from "../components/Layout"
class Index extends React.Component {
    static async getInitialProps({ req, res, query }) {
        /** we can access to req, res and query params in the get Initial props
         * In here, I have de-structure the context object
          */
        let stories
        try {
            /** 
             * https://node-hnapi.herokuapp.com/news?page=1
             * this url is working on web. but, not working inside fetch
             * */
            const response = await fetch("https://saurav.tech/NewsAPI/everything/cnn.json")
            stories = await response.json()
        } catch (error) {
            console.log(error)
            stories = []
        }
        return { stories }
    }

    componentDidMount() {
        if("serviceWorker" in navigator) {
            navigator.serviceWorker
                .register("/service-worker.js")
                .then(registration => {
                    console.log("service worker registration successful", registration)
                })
                .catch(err => {
                    console.warn("service worker registration failed", err.message)
                })
        }
    }
    render() {
        const { stories, stories: { articles } } = this.props
        if (stories.length === 0) return <Error statusCode={503} />
        return (
            <Layout title="Hacker Next" description="A Hacker News clone made with Next.js">
                <StoryList articles={articles} />
            </Layout>
        )
    }
}

export default Index
