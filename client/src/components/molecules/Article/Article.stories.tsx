import { ComponentMeta, ComponentStory } from "@storybook/react";
import Article from "./Article";

export default{
    title:'Molecules/Article',
    component:Article
} as ComponentMeta<typeof Article>

const Template: ComponentStory<typeof Article> = args => <Article {...args} />

export const article = Template.bind({});

article.args={
    author: "Manish Singh",
    title: "Indian fintech founder asks for the removal of BharatPe CEO from board",
    image: "https://techcrunch.com/wp-content/uploads/2022/01/GettyImages-1236288728.jpg?w=592"
}