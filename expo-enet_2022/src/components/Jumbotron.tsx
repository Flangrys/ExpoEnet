import { Component } from "react";

type JumboImg = {
    source: string
    alt: string
}

type JumbotronProp = {
    contentTitle: string
    contentBody: string
    img: JumboImg
}

class Jumbotron extends Component<JumbotronProp> {

    constructor(props: JumbotronProp) {
        super(props)

        this.state = {}
    }

    render() {
        const contentTitle = this.props.contentTitle
        const contentBody = this.props.contentTitle
        const imgSource = this.props.img.source
        const imgAlt = this.props.img.alt


        return (
            <>
                <div className="container py-5">
                    <div className="row">

                        <div className="col-md-8">
                            <h1 className="display-5 fw-bold pb-2">{contentTitle}</h1>
                            <p className="col-lg-10 fs-4 pb-2">{contentBody}</p>
                        </div>

                        <img className="col-md-4" src={imgSource} alt={imgAlt} />

                    </div>
                </div>
            </>
        )
    }
}

export default Jumbotron