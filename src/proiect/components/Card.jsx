import './Card.css';


function SidebarCard(props){
    const {title, description} = props;
    return(
        <div id= 'sidebarCard'>
            <h5>{title}</h5>
            <p>{description}</p>
        </div>
    )
}

function BlogCard(props){
    const {title, description, image, button} = props;
    return (
    <div className = 'card'>
        <img src = {image} alt = ''/>
        <h2>{title}</h2>
        <p>{description}</p>
        <button>{button}</button>
    </div>
    )
}

function TestimonialCard(props){
    const {image, description, author, company} = props;
    return (
    <div id = 'testimonialCard'>
        <img src = {image} alt = ''/>
        <blockquote>
            <p>{description}</p>
            <cite>{author}<span>,</span> {company}</cite>
        </blockquote>
    </div>
    )
}

export { SidebarCard, BlogCard, TestimonialCard };