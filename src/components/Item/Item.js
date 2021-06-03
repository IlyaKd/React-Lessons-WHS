import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Item.module.css';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

class Item extends React.Component {

    render() {
        const { value, isDone, id, onClickDone, onClickDelete } = this.props;

        return (
            <div className={styles.flex}>
                <div>
                    <Checkbox
                        value="primary"
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                        onClick={() => onClickDone(id)}
                    />
                    <span className={
                        classnames({
                            [styles.item]: true,
                            [styles.done]: isDone
                        })
                    }>
                    {value}
                    </span>
                </div>
                <div>
                    <IconButton aria-label="delete" onClick={() => onClickDelete(id)}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </div>);
    }
};

Item.defaultProps = {
    value: 'Дела отсутствуют'
};

Item.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]),
    isDone: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
};

export default Item;