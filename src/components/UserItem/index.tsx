import * as React from 'react';
import {TableCol, TableRow} from './styles';

interface IProps {
  firstName: string;
  lastName: string;
}

interface IState {
  comment?: string;
  like?: boolean;
  likeImg?: string;
}

export class UserItemView extends React.Component<IProps, IState> {
  state = {
    comment: '',
    like: false,
    likeImg: '\u2661',
  };

  handleLike() {
    this.setState({
      like: !this.state.like,
      likeImg: this.state.like ? '\u2661' : '\u2665',
    });
  };

  handleChangeComment(e: string) {
    this.setState({comment: e});
  };

  render() {
    return (
      <TableRow>
        <TableCol>
          {this.props.firstName}
          {' '}
          {this.props.lastName}
        </TableCol>
        <TableCol onClick={this.handleLike} className="like">
          {this.state.likeImg}
        </TableCol>
        <TableCol>
          <input
            type="text"
            name="comment"
            value={this.state.comment}
            onChange={(event) => this.handleChangeComment(event.target.value)}
          />
        </TableCol>
      </TableRow>
    );
  }
}
