import React from 'react';

type Props = {};

const Mint = (props: Props) => {
  return (
    <main>
      <form>
        <label>Image</label>
        <input type='file' accept='image/*' />

        <label>Title</label>
        <input type='text' />

        <label>Description</label>
        <input type='text' />

        <label>Royalty</label>
        <input type='number' min={0} max={100} />
      </form>
    </main>
  );
};

export default Mint;
