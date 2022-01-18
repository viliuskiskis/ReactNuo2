// vėliau dar ir import PropTypes from 'prop-types';

class ProductCardComponent extends React.Component {
    render() {
        return (
            <div className="col-md-3">
                <div className="card text-center">
                    <img src={this.props.ImgURL} className="card-img-top" alt={this.props.ImgAlt} />
                    <div className="card-body">
                        <h5 className="card-title fs-4"> {this.props.CardTitle} </h5>
                        <p className="card-text fw-bold fs-2">{this.props.CardText}</p>
                        <div className="d-grid gap-2">
                            <a href={this.props.BtnURL} className="btn btn-primary btn-outline-warning btn-lg">{this.props.BtnText}</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class ProductListComponent extends React.Component {
    render() {
        return (
            <div className="container p-4">
                <div className="container-fluid d-flex justify-content-center">
                    <div className="row g-md-4">
                        <ProductCardRenderedComponent />
                        <ProductCardRenderedComponent />
                        <ProductCardRenderedComponent />
                        <ProductCardRenderedComponent />
                        <ProductCardRenderedComponent />
                        <ProductCardRenderedComponent />
                        <ProductCardRenderedComponent />
                        <ProductCardRenderedComponent />
                        <ProductCardRenderedComponent />
                    </div>
                </div >
            </div>
        );
    }
}

class ProductCardRenderedComponent extends React.Component {
    render() {
        return (
            <ProductCardComponent CardTitle="Skutimosi peiliukas 'Skusk'"
                CardText="2€" //"Nuostabiai nuskus tavo skruostą"
                BtnText="detaliau" //pirkti
                BtnURL="https://wikipedia.org"
                ImgAlt="Prekė skutimosi peiliukas 'Skusk'"
                ImgURL="./img/daugkartiniai-skutimosi-skustuvai-peiliukai-nulisstore_1024x1024@2x.webp" />
        );
    }
}

ProductCardComponent.propTypes = {
    CardTitle: PropTypes.string.isRequired,
    CardText: PropTypes.string.isRequired,
    BtnText: PropTypes.string.isRequired,
    ImgAlt: PropTypes.string.isRequired,
    ImgURL: PropTypes.string.isRequired,
};

ReactDOM.render(
    <ProductListComponent Count="25" />,
    document.getElementById('root')
);