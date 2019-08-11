import React from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'antd';

//顶部Banner
class TopBanner extends React.Component {
    static propTypes = {
        className: PropTypes.string,
    }
    static defaultProps = {
        className: 'home-banner',
    }
    render(){
        const { className } = this.props;
        return (
            <div>
                <Carousel autoplay>
                    <div>
                        <div><h3>1</h3></div>
                        <div></div>
                    </div>
                    <div>
                        <div><h3>2</h3></div>
                        <div></div>
                    </div>
                    <div>
                        <div><h3>3</h3></div>
                        <div></div>
                    </div>
                    <div>
                        <div><h3>4</h3></div>
                        <div></div>
                    </div>
                </Carousel>
            </div>
        );
    }
}

export default TopBanner;