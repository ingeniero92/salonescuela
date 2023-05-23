import React from "react";
import PropTypes from "prop-types";

import { RootStore } from "../../store/RootStore";

class BaseComponent extends React.Component {

    /**
     * @type {RootStore}
     */
    store;

    constructor(props){
        super(props);
        this.store = this.props.store;
    }

}

BaseComponent.propTypes = {
    store: PropTypes.instanceOf(RootStore)
};

export default BaseComponent;