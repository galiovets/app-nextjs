function DataList({ collection, icon }) {
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
            display: flex;
            flex-wrap: wrap;
            margin-left: -20px;
            text-align: center;
            justify-content: space-around;
            margin-bottom: 40px;
            font-size: 20px;
            line-height: 1.2;
          }

          li {
            flex-basis: calc((100% - 80px) / 4);
            margin-left: 20px;
          }
        `}
      </style>
    </>
  );
}

export default DataList;
