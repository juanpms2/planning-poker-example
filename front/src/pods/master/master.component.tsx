import * as React from 'react';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { appBaseUrl } from 'core';
import {
  DefineStoryComponent,
  PlayersConnectedComponent,
  VotingInProgress,
  ShowVotingResults,
} from './components';
import { Player, MasterStatus, VoteResult } from './master.vm';
import { VoteOptionsComponent } from 'common-app/components';

interface Props {
  room: string;
  playerCollection: Player[];
  onSetStoryTitle: (title: string) => void;
  masterStatus: MasterStatus;
  onFinishVoting: () => void;
  onMoveToNextStory: () => void;
  onMasterVoteChosen: (vote: string) => void;
  masterVoted: boolean;
  voteCollectionResult: VoteResult[];
  title: string;
}

export const MasterComponent: React.FC<Props> = props => {
  const {
    room,
    playerCollection,
    onSetStoryTitle,
    masterStatus,
    onFinishVoting,
    onMoveToNextStory,
    onMasterVoteChosen,
    masterVoted,
    voteCollectionResult,
    title,
  } = props;

  function showComponentBasedOnMasterStatus(status: MasterStatus) {
    switch (status) {
      case MasterStatus.INITIALIZING:
        return null;
      case MasterStatus.CREATING_STORY:
        return <DefineStoryComponent onSubmit={onSetStoryTitle} />;
      case MasterStatus.VOTING_IN_PROGRESS:
        return (
          <VotingInProgress
            masterVoted={masterVoted}
            onFinishVoting={onFinishVoting}
            onMasterVoteChosen={onMasterVoteChosen}
            title={title}
          />
        );
      case MasterStatus.SHOWING_RESULTS:
        return (
          <ShowVotingResults
            onMoveToNextStory={onMoveToNextStory}
            voteCollectionResult={voteCollectionResult}
          />
        );
      default:
        return null;
    }
  }

  return (
    <>
      <Typography variant="h3">
        Share this link to let other participants join the session:
      </Typography>

      <Typography variant="h3">{`${appBaseUrl}/#/player/${room}`}</Typography>

      {showComponentBasedOnMasterStatus(masterStatus)}
      {room ? (
        <PlayersConnectedComponent playerCollection={playerCollection} />
      ) : null}
    </>
  );
};
