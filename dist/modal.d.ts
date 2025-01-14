import * as React from 'react';
import {
  Animated,
  PanResponderGestureState,
  PanResponderInstance,
  StyleProp,
  ViewStyle,
  ViewProps,
} from 'react-native';
import * as PropTypes from 'prop-types';
import {Animation, CustomAnimation} from 'react-native-animatable';
import {
  Direction,
  Orientation,
  OrNull,
  PresentationStyle,
  OnOrientationChange,
  GestureResponderEvent,
} from './types';
export declare type OnSwipeCompleteParams = {
  swipingDirection: Direction;
};
declare type State = {
  showContent: boolean;
  isVisible: boolean;
  deviceWidth: number;
  deviceHeight: number;
  isSwipeable: boolean;
  pan: OrNull<Animated.ValueXY>;
};
export interface ModalProps extends ViewProps {
  children: React.ReactNode;
  onSwipeStart?: (gestureState: PanResponderGestureState) => void;
  onSwipeMove?: (
    percentageShown: number,
    gestureState: PanResponderGestureState,
  ) => void;
  onSwipeComplete?: (
    params: OnSwipeCompleteParams,
    gestureState: PanResponderGestureState,
  ) => void;
  onSwipeCancel?: (gestureState: PanResponderGestureState) => void;
  style?: StyleProp<ViewStyle>;
  swipeDirection?: Direction | Array<Direction>;
  onDismiss?: () => void;
  onShow?: () => void;
  hardwareAccelerated?: boolean;
  onOrientationChange?: OnOrientationChange;
  presentationStyle?: PresentationStyle;
  animationIn: Animation | CustomAnimation;
  animationInTiming: number;
  animationOut: Animation | CustomAnimation;
  animationOutTiming: number;
  avoidKeyboard: boolean;
  coverScreen: boolean;
  hasBackdrop: boolean;
  backdropColor: string;
  backdropOpacity: number;
  backdropTransitionInTiming: number;
  backdropTransitionOutTiming: number;
  customBackdrop: React.ReactNode;
  useNativeDriver: boolean;
  useNativeDriverForBackdrop?: boolean;
  deviceHeight: number;
  deviceWidth: number;
  hideModalContentWhileAnimating: boolean;
  propagateSwipe:
    | boolean
    | ((
        event: GestureResponderEvent,
        gestureState: PanResponderGestureState,
      ) => boolean);
  isVisible: boolean;
  onModalShow: () => void;
  onModalWillShow: () => void;
  onModalHide: () => void;
  onModalWillHide: () => void;
  onBackButtonPress: () => void;
  onBackdropPress: () => void;
  panResponderThreshold: number;
  swipeThreshold: number;
  scrollTo: OrNull<(e: any) => void>;
  scrollOffset: number;
  scrollOffsetMax: number;
  scrollHorizontal: boolean;
  statusBarTranslucent?: boolean;
  supportedOrientations?: Orientation[];
}
export declare class ReactNativeModal extends React.Component<
  ModalProps,
  State
> {
  static propTypes: {
    animationIn: PropTypes.Requireable<string | object>;
    animationInTiming: PropTypes.Requireable<number>;
    animationOut: PropTypes.Requireable<string | object>;
    animationOutTiming: PropTypes.Requireable<number>;
    avoidKeyboard: PropTypes.Requireable<boolean>;
    coverScreen: PropTypes.Requireable<boolean>;
    hasBackdrop: PropTypes.Requireable<boolean>;
    backdropColor: PropTypes.Requireable<string>;
    backdropOpacity: PropTypes.Requireable<number>;
    backdropTransitionInTiming: PropTypes.Requireable<number>;
    backdropTransitionOutTiming: PropTypes.Requireable<number>;
    customBackdrop: PropTypes.Requireable<PropTypes.ReactNodeLike>;
    children: PropTypes.Validator<
      | string
      | number
      | boolean
      | {}
      | PropTypes.ReactElementLike
      | PropTypes.ReactNodeArray
    >;
    deviceHeight: PropTypes.Requireable<number>;
    deviceWidth: PropTypes.Requireable<number>;
    isVisible: PropTypes.Validator<boolean>;
    hideModalContentWhileAnimating: PropTypes.Requireable<boolean>;
    propagateSwipe: PropTypes.Requireable<boolean | ((...args: any[]) => any)>;
    onModalShow: PropTypes.Requireable<(...args: any[]) => any>;
    onModalWillShow: PropTypes.Requireable<(...args: any[]) => any>;
    onModalHide: PropTypes.Requireable<(...args: any[]) => any>;
    onModalWillHide: PropTypes.Requireable<(...args: any[]) => any>;
    onBackButtonPress: PropTypes.Requireable<(...args: any[]) => any>;
    onBackdropPress: PropTypes.Requireable<(...args: any[]) => any>;
    panResponderThreshold: PropTypes.Requireable<number>;
    onSwipeStart: PropTypes.Requireable<(...args: any[]) => any>;
    onSwipeMove: PropTypes.Requireable<(...args: any[]) => any>;
    onSwipeComplete: PropTypes.Requireable<(...args: any[]) => any>;
    onSwipeCancel: PropTypes.Requireable<(...args: any[]) => any>;
    swipeThreshold: PropTypes.Requireable<number>;
    swipeDirection: PropTypes.Requireable<
      string | (string | null | undefined)[]
    >;
    useNativeDriver: PropTypes.Requireable<boolean>;
    useNativeDriverForBackdrop: PropTypes.Requireable<boolean>;
    style: PropTypes.Requireable<any>;
    scrollTo: PropTypes.Requireable<(...args: any[]) => any>;
    scrollOffset: PropTypes.Requireable<number>;
    scrollOffsetMax: PropTypes.Requireable<number>;
    scrollHorizontal: PropTypes.Requireable<boolean>;
    supportedOrientations: PropTypes.Requireable<(string | null | undefined)[]>;
  };
  static defaultProps: {
    animationIn: string;
    animationInTiming: number;
    animationOut: string;
    animationOutTiming: number;
    avoidKeyboard: boolean;
    coverScreen: boolean;
    hasBackdrop: boolean;
    backdropColor: string;
    backdropOpacity: number;
    backdropTransitionInTiming: number;
    backdropTransitionOutTiming: number;
    customBackdrop: null;
    useNativeDriver: boolean;
    deviceHeight: null;
    deviceWidth: null;
    hideModalContentWhileAnimating: boolean;
    propagateSwipe: boolean;
    isVisible: boolean;
    onModalShow: () => null;
    onModalWillShow: () => null;
    onModalHide: () => null;
    onModalWillHide: () => null;
    onBackdropPress: () => null;
    onBackButtonPress: () => null;
    panResponderThreshold: number;
    swipeThreshold: number;
    scrollTo: null;
    scrollOffset: number;
    scrollOffsetMax: number;
    scrollHorizontal: boolean;
    supportedOrientations: string[];
  };
  state: State;
  isTransitioning: boolean;
  inSwipeClosingState: boolean;
  currentSwipingDirection: OrNull<Direction>;
  animationIn: string;
  animationOut: string;
  backdropRef: any;
  contentRef: any;
  panResponder: OrNull<PanResponderInstance>;
  constructor(props: ModalProps);
  static getDerivedStateFromProps(
    nextProps: ModalProps,
    state: State,
  ): {
    isVisible: boolean;
    showContent: boolean;
  } | null;
  componentDidMount(): void;
  componentWillUnmount(): void;
  componentDidUpdate(prevProps: ModalProps): void;
  getDeviceHeight: () => number;
  getDeviceWidth: () => number;
  onBackButtonPress: () => boolean;
  shouldPropagateSwipe: (
    evt: GestureResponderEvent,
    gestureState: PanResponderGestureState,
  ) => boolean;
  buildPanResponder: () => void;
  getAccDistancePerDirection: (
    gestureState: PanResponderGestureState,
  ) => number;
  getSwipingDirection: (
    gestureState: PanResponderGestureState,
  ) => 'left' | 'right' | 'up' | 'down';
  calcDistancePercentage: (gestureState: PanResponderGestureState) => number;
  createAnimationEventForSwipe: () => (...args: any[]) => void;
  isDirectionIncluded: (direction: Direction) => any;
  isSwipeDirectionAllowed: ({dy, dx}: PanResponderGestureState) => boolean;
  handleDimensionsUpdate: () => void;
  open: () => void;
  close: () => void;
  makeBackdrop: () => JSX.Element | null;
  render(): JSX.Element;
}
export default ReactNativeModal;
