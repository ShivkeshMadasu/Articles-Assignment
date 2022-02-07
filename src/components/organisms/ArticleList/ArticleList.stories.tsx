import { ComponentStory } from "@storybook/react";
import ArticleList from "./ArticleList";
import { BrowserRouter } from "react-router-dom";

export default{
    title:'Organisms/Article List',
    component:ArticleList
}

const Template : ComponentStory<typeof ArticleList> = () => <BrowserRouter> <ArticleList  /> </BrowserRouter>

export const articleList = Template.bind({})