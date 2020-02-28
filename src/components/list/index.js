import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { FixedSizeGrid } from 'react-window';
import ResizeObserver from 'resize-observer-polyfill';
import { ListItem } from '../listItem';
import { Loading } from '../loading';

import { Container, Paragraph } from './styles';

export const List = ({ loading, items }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [columns, setColumns] = useState(0);
  const [rows, setRows] = useState(0);

  useEffect(() => {
    const container = ref.current;

    if (!container) {
      return;
    }

    function handleResize() {
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
      const { top, width: containerWidth } = container.getBoundingClientRect();

      if (containerWidth < 690) {
        setColumns(1);
      } else if (containerWidth >= 690 && containerWidth < 1140) {
        setColumns(2);
      } else {
        setColumns(3);
      }

      setHeight(viewHeight - top);
      setWidth(containerWidth);
    }

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
  }, []);

  useEffect(() => {
    setRows(Math.ceil(items.length / columns) || 0);
  }, [items.length]);

  function renderRow({ columnIndex, rowIndex, style }) {
    const index = (rowIndex * columns) + columnIndex;

    if (!items[index]) {
      return null;
    }

    const { id, ...item } = items[index];

    return (<ListItem key={item.id} style={style} {...item} />);
  }

  return (
    <Container ref={ref}>
      {loading && (<Loading />)}
      {!loading && items.length === 0 && (<Paragraph>No results :(</Paragraph>)}
      <FixedSizeGrid
        columnCount={columns}
        height={height}
        columnWidth={(width / columns) || 0}
        width={width}
        rowCount={rows}
        rowHeight={488}
      >
        {renderRow}
      </FixedSizeGrid>
    </Container>
  );
};

List.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    thumbnail: PropTypes.shape({
      path: PropTypes.string,
      extension: PropTypes.string,
    }),
    urls: PropTypes.arrayOf(PropTypes.shape({
      type: PropTypes.string,
      url: PropTypes.string,
    })),
  })).isRequired,
  loading: PropTypes.bool,
};

List.defaultProps = {
  loading: false,
};
