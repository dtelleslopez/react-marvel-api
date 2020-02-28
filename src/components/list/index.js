import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import InfiniteLoader from 'react-window-infinite-loader';
import { FixedSizeGrid } from 'react-window';
import ResizeObserver from 'resize-observer-polyfill';
import { ListItem } from '../listItem';
import { Loading } from '../loading';

import { Container, Paragraph } from './styles';

const ROW_HEIGHT = 488;
const ITEM_COUNT = 1000;

export const List = ({ items, loading, loadMoreItems }) => {
  const [height, setHeight] = useState(600);
  const [width, setWidth] = useState(1230);
  const [columns, setColumns] = useState(3);

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) {
      return;
    }

    const handleResize = () => {
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
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
  }, []);

  const renderRow = ({ columnIndex, rowIndex, style }) => {
    const index = (rowIndex * columns) + columnIndex;

    if (!items[index]) {
      return null;
    }

    const { id, ...item } = items[index];

    return (<ListItem key={item.id} style={style} {...item} />);
  };

  const handleLoadMoreItems = () => {
    loadMoreItems();
  };

  const handleOnItemsRendered = (onItemsRendered) => ({
    visibleColumnStartIndex,
    visibleColumnStopIndex,
    visibleRowStartIndex,
    visibleRowStopIndex,
  }) => {
    const visibleStartIndex = (visibleRowStartIndex * columns) + visibleColumnStartIndex;
    let visibleStopIndex = (visibleRowStopIndex * columns) + visibleColumnStopIndex;

    if (!items[visibleStopIndex]) {
      visibleStopIndex -= 1;
    }

    onItemsRendered({ visibleStartIndex, visibleStopIndex });
  };

  return (
    <Container ref={containerRef}>
      {loading && (<Loading />)}
      {!loading && items.length === 0 && (<Paragraph>No results :(</Paragraph>)}
      <InfiniteLoader
        isItemLoaded={(index) => index < items.length}
        loadMoreItems={handleLoadMoreItems}
        itemCount={ITEM_COUNT}
      >
        {({ onItemsRendered, ref }) => (
          <FixedSizeGrid
            onItemsRendered={handleOnItemsRendered(onItemsRendered)}
            columnCount={columns}
            height={height}
            columnWidth={width / columns}
            width={width}
            rowCount={Math.ceil(items.length / columns)}
            rowHeight={ROW_HEIGHT}
            ref={ref}
          >
            {renderRow}
          </FixedSizeGrid>
        )}
      </InfiniteLoader>
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
  loadMoreItems: PropTypes.func.isRequired,
};

List.defaultProps = {
  loading: false,
};
