import * as React from 'react';
import Button from '@material-ui/core/Button';
import { TShirtVotes } from 'core';

interface Props {
  vote: string;
  onVoteChosen: (vote: string) => void;
}

export const VoteOptionsComponent : React.FC<Props> = props => {
  const { vote, onVoteChosen } = props;

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={e => onVoteChosen(TShirtVotes.XXL)}
      >
        {TShirtVotes.XXL}
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={e => onVoteChosen(TShirtVotes.XL)}
      >
        {TShirtVotes.XL}
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={e => onVoteChosen(TShirtVotes.L)}
      >
        {TShirtVotes.L}
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={e => onVoteChosen(TShirtVotes.M)}
      >
        {TShirtVotes.M}
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={e => onVoteChosen(TShirtVotes.S)}
      >
        {TShirtVotes.S}
      </Button>
      <Button
        variant="contained"
        color="primary"
        onClick={e => onVoteChosen(TShirtVotes.XS)}
      >
        {TShirtVotes.XS}
      </Button>
    </>
  );
};
