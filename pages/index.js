import React from "react"
import fetch from "isomorphic-fetch"
import Error from "next/error"
import StoryList from "../components/StoryList"
class Index extends React.Component {
    static async getInitialProps() {
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
    render() {
        const { stories, stories: { articles } } = this.props
        if (stories.length === 0) return <Error statusCode={503} />
        return (
            <div>
                <h1>hacker next</h1>
                <StoryList articles={articles} />
            </div>
        )
    }
}

export default Index
