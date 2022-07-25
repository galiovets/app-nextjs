function DataList({ collection }) {
  return (
    <>
      <ul>
        {collection.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>

      <style jsx>
        {`
          ul {
            color: red;
          }
        `}
      </style>
    </>
  );
}

export default DataList;
