import { useFormStatus } from "react-dom";

import React from "react";

const Submit = () => {
  const { pending } = useFormStatus();
  return (
    <p className="actions">
      <button disabled={pending} type="submit">
        {pending ? "Submitting..." : "Submit"}
      </button>
    </p>
  );
};

export default Submit;
