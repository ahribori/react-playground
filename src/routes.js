import React from 'react';
import { Route, Switch } from 'react-router-dom';

import {
  Calendar,
  DecoratorTest,
  GoogleSheet,
  Home,
  JSS,
  MaterialUI,
  MobX,
  NewFeature,
  NotificationExample,
  ReactImages,
  ReselectExample,
  Rx,
  TUIEditor,
  VideoJs,
  Zzalbang,
  ParticlesExample,
  ModalExample,
  SlickExample,
  FormikExample,
  ReactHooks,
  ImageCrop,
  ReactDnD,
  ReactSortable,
  ReactDatePickerExample,
  ReactTransitionGroup,
} from './containers';

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/new" component={NewFeature} />
    <Route exact path="/calendar" component={Calendar} />
    <Route exact path="/google-sheet" component={GoogleSheet} />
    <Route exact path="/rx" component={Rx} />
    <Route exact path="/editor" component={TUIEditor} />
    <Route exact path="/decorator" component={DecoratorTest} />
    <Route exact path="/decorator" component={DecoratorTest} />
    <Route exact path="/zzalbang" component={Zzalbang} />
    <Route exact path="/mui" component={MaterialUI} />
    <Route exact path="/reselect" component={ReselectExample} />
    <Route exact path="/mobx" component={MobX} />
    <Route exact path="/videojs" component={VideoJs} />
    <Route exact path="/react_images" component={ReactImages} />
    <Route exact path="/notification_example" component={NotificationExample} />
    <Route exact path="/particles_example" component={ParticlesExample} />
    <Route exact path="/jss" component={JSS} />
    <Route exact path="/modal_example" component={ModalExample} />
    <Route exact path="/slick_example" component={SlickExample} />
    <Route exact path="/formik_example" component={FormikExample} />
    <Route exact path="/react_hooks" component={ReactHooks} />
    <Route exact path="/image_crop" component={ImageCrop} />
    <Route exact path="/react_dnd" component={ReactDnD} />
    <Route exact path="/react_sortable" component={ReactSortable} />
    <Route exact path="/react_datepicker" component={ReactDatePickerExample} />
    <Route
      exact
      path="/react_transition_group"
      component={ReactTransitionGroup}
    />
  </Switch>
);
