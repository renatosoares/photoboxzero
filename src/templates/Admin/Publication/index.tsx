import React from "react";

type PublicationProps = {
  csrfToken: string;
};

const Publication = ({ csrfToken }: PublicationProps) => {
  const eventOnSubmit = (event: React.FormEvent) => {
    console.log(event);
  };
  return (
    <div>
      <form onSubmit={eventOnSubmit}>
        <input name="csrfToken" type="hidden" defaultValue={csrfToken} />
      </form>
    </div>
  );
};

export default Publication;
