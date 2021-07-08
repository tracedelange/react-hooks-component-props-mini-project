const About = ({image='https://via.placeholder.com/215', aboutText}) => {
    return (
        <aside>
            <img src={image} alt={"Blog Logo"} />
            <p>{aboutText}</p>
        </aside>
    )
}
export default About;