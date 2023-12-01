import React, {Component} from 'react'
import Page from './Page'

class App extends Component{
    constructor(){
        super()
        this.state = {
            loading: false,
            metaData: '',
            pagesData: [],
        }
    }

    componentDidMount() {
        this.setState({ loading: true });
        try {
            Promise.all([
                fetch("").then(response => response.json()),
                fetch("").then(response => response.json()),
            ])
            .then((data) => {
                this.setState({
                    loading: false,
                    metaData: data[0],
                    pagesData: data[1]
                });
            });
        } catch (err) {
            console.log(err);
        }
    }
    

    render(){
        
       const page =  this.state.pagesData.map((page) => {
            return (
                <div key={page.id} className="list-group">
                 <Page pageTitle={page.title.rendered} pageLink={page.link} pageExcerpt={page.excerpt.rendered} />
                </div>
            )
        })

        const text = this.state.loading ? "Loading..." : page

        return(
            <div className="container">
                <h1>{this.state.metaData.name}</h1>
                {text}
            </div>
        )
    }
}

export default App

