import React from 'react';
import { useStore } from 'effector-react';
import * as user from 'shared-modules/user';
import { Button } from 'ui';
import * as model from '../model';

export const FormFooter: React.FC = () => {
  const { image, username } = useStore(user.model.$user);
  const disabled = useStore(model.fetchCommentFx.pending);

  return (
    <div className="card-footer">
      <img alt={username} className="comment-author-img" src={image} />
      <Button className="btn-sm btn-primary" disabled={disabled} type="submit">
        Post Comment
      </Button>
    </div>
  );
};
