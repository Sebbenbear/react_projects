import React, { Component } from 'react';
import Image from 'react-bootstrap/lib/Image';

export class BackgroundImage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true,
            error: null,
            image: ""
        };
    };

    componentDidMount() {
        this.getImage();
    };

    /* Gets a random image from a page of images fetched from Unsplash.*/
    getImage() {
        const sendRequest = true;
        const query = this.props.keyword.replace(" ", "+");
        const key = process.env.REACT_APP_UNSPLASH_ACCESS_KEY;
        const url = "https://api.unsplash.com/search/photos?page=1&query=" + query + "&client_id=" + key;

        if (sendRequest) {
            fetch(url)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error("Couldn't load the image.");
            }})
            .then(data => {
                const randomIndex = Math.floor(Math.random() * 10);
                this.setState({
                    image: data.results[randomIndex].urls.small,
                    isLoading: false
                });
            });
        } else {
            this.setState({
                image: "https://www.newyorksightseeing.com/media/wysiwyg/GLNY/nyss_newyorkcity_roptimized.jpg.jpg",
                isLoading: false
            });
        }
    }
    
    render() {
        let { image, isLoading, error } = this.state;

        if (error) {
            return (
            <div>
                <p>{error.message}</p>;
                <Image src={image} alt="background" rounded/>
            </div>)
        }
      
        if (isLoading) {
            return <p>Loading ...</p>;
        }

        return (
            <Image src={image} alt="background" rounded/>
        );
    };
}

export default BackgroundImage;