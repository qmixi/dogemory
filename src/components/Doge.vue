<template>
  <div class="doge">
    <div class="doge__trunk"></div>
    <div class="doge__tail"></div>
    <div class="doge__head">
      <div class="head__left-ear"></div>
      <div class="head__right-ear"></div>
      <div class="head__left-eye"></div>
      <div class="head__right-eye"></div>
      <div class="head__mouth"></div>
      <div class="head__nose"></div>
    </div>
    <div class="doge__collar">
      <div class="doge__medal"></div>
    </div>
    <div class="doge__front-left-paw"></div>
    <div class="doge__front-right-paw"></div>
    <div class="doge__back-left-paw"></div>
    <div class="doge__back-right-paw"></div>
  </div>
</template>

<style scoped lang="scss">
$green: #38cd9f;
$dg: #b6a597;
$dark: #2d2d2d;
$light: #808080;
$nose: #232323;
$front-paw: #b6a597;
$back-paw: #b09d8e;
$medal: #f7e191;

@mixin transform($arg) {
  transform: $arg;
  -webkit-transform: $arg;
  -moz-transform: $arg;
  -o-transform: $arg;
  -ms-transform: $arg;
}

@keyframes dog-head {
  0% {
    @include transform(rotate(80deg));
  }

  20% {
    @include transform(rotate(80deg));
  }

  60% {
    @include transform(rotate(90deg));
  }

  100% {
    @include transform(rotate(80deg));
  }
}

@keyframes paw {
  0% {
    @include transform(rotate(-10deg) translate(0, -10px));
  }

  20% {
    @include transform(rotate(20deg) translate(0, 0));
  }

  100% {
    @include transform(rotate(-10deg) translate(0, -10px));
  }
}

@keyframes shadow {
  0% {
    @include transform(scale(1) rotate(-5deg));
  }

  50% {
    @include transform(scale(1.04) rotate(-5deg));
  }

  100% {
    @include transform(scale(1) rotate(-5deg));
  }
}

@keyframes run {
  0% {
    @include transform(scale(1));
  }

  20% {
    @include transform(scale(1.02) translate(0, -3px));
  }

  100% {
    @include transform(scale(1));
  }
}

@keyframes eye {
  0% {
    @include transform(translate(0, 0px));
  }

  38% {
    @include transform(translate(0, 0px));
  }

  40% {
    @include transform(translate(-3px, 5px));
  }

  45% {
    @include transform(translate(6px, 9px));
  }

  92% {
    @include transform(translate(6px, 9px));
  }

  95% {
    @include transform(translate(-3px, 5px));
  }

  100% {
    @include transform(translate(0, 0px));
  }
}

@keyframes medal {
  0% {
    bottom: 0px;
    left: 50px;
  }

  60% {
    bottom: 10px;
    left: 55px;
  }

  100% {
    bottom: 0px;
    left: 50px;
  }
}

body {
  background: $green;
}

.doge {
  position: relative;
  margin: auto;
  width: 150px;

  &__trunk {
    width: 154px;
    height: 120px;
    border-radius: 47%;
    background: $dg;
    @include transform(rotate(-15deg));
    z-index: 5;
    animation: run 0.4s infinite 0.2s cubic-bezier(0.4, 0.34, 0.16, 0.79);
  }

  &__tail {
    position: absolute;
    width: 30px;
    height: 28px;
    background: $dg;
    right: -10px;
    top: 13px;
    border-radius: 50%;
    animation: run 0.4s infinite 0.21s cubic-bezier(0.4, 0.34, 0.16, 0.79);
  }

  &__collar {
    width: 60px;
    height: 77px;
    background: $blue;
    top: 10px;
    left: 10px;
    position: absolute;
    border-radius: 50%;
    @include transform(rotate(60deg));
    z-index: 9;

    .doge__medal {
      width: 21px;
      height: 18px;
      background: $medal;
      border-radius: 50%;
      bottom: 0px;
      left: 50px;
      z-index: 999;
      position: absolute;
      animation: medal 2.2s infinite 0.5s cubic-bezier(0.4, 0.34, 0.16, 0.79);
    }
  }

  &__head {
    border-radius: 47%;
    position: absolute;
    background: $dg;
    @include transform(rotate(80deg));
    width: 105px;
    height: 110px;
    top: -32px;
    left: -30px;
    z-index: 13;
    animation: dog-head 3.8s infinite 1s cubic-bezier(0.4, 0.34, 0.16, 0.79);

    .head__left-ear {
      position: absolute;
      border: 32px solid transparent;
      border-left: 30px solid $dark;
      border-radius: 10px;
      @include transform(rotate(-110deg));
      top: -55px;
      right: 40px;
    }

    .head__right-ear {
      position: absolute;
      border: 32px solid transparent;
      border-left: 30px solid $dark;
      border-radius: 10px;
      @include transform(rotate(-250deg));
      bottom: -55px;
      right: 40px;
    }

    .head__left-eye {
      position: absolute;
      height: 22px;
      width: 22px;
      background: $dark;
      border-radius: 50%;
      top: 12px;
      left: 38px;

      &:before {
        content: "";
        position: absolute;
        display: block;
        width: 4px;
        height: 4px;
        background: white;
        border-radius: 50%;
        z-index: 99999;
        top: 4px;
        left: 6px;
        animation: eye 10s infinite 0.18s linear;
      }
    }

    .head__right-eye {
      position: absolute;
      height: 22px;
      width: 22px;
      background: $dark;
      border-radius: 50%;
      top: 75px;
      left: 38px;

      &:before {
        content: "";
        position: absolute;
        display: block;
        width: 4px;
        height: 4px;
        background: white;
        border-radius: 50%;
        z-index: 99999;
        top: 4px;
        left: 6px;
        animation: eye 10s infinite 0.18s linear;
      }
    }

    .head__mouth {
      position: absolute;
      @include transform(rotate(-180deg));
      border: 34px solid transparent;
      border-left: 48px solid #434244;
      border-radius: 17px;
      bottom: 23px;
      right: 2px;

      &:after {
        content: "";
        position: absolute;
        @include transform(rotate(0deg));
        border: 18px solid transparent;
        border-left: 18px solid rgba(43, 46, 42, 0.6);
        border-radius: 17px;
        bottom: -18px;
        right: 13px;
      }
    }

    .head__nose {
      position: absolute;
      @include transform(rotate(0deg));
      border: 10px solid transparent;
      border-left: 10px solid $nose;
      border-radius: 17px;
      bottom: 47px;
      right: 19px;
    }
  }

  &__front-left-paw {
    width: 20px;
    height: 60px;
    border-radius: 10px;
    position: absolute;
    bottom: -29px;
    left: 19px;
    background: $front-paw;
    animation: paw 0.8s infinite 0.18s cubic-bezier(0.4, 0.34, 0.16, 0.79);
    transform-origin: 50% 0%;
  }

  &__front-right-paw {
    width: 20px;
    height: 60px;
    border-radius: 10px;
    position: absolute;
    bottom: -34px;
    left: 75px;
    background: $front-paw;
    animation: paw 0.8s infinite 0s cubic-bezier(0.4, 0.34, 0.16, 0.79);
    transform-origin: 50% 0%;
  }

  &__back-left-paw {
    width: 20px;
    height: 60px;
    border-radius: 10px;
    position: absolute;
    bottom: -13px;
    left: 117px;
    background: $back-paw;
    z-index: -1;
    animation: paw 0.8s infinite 0.3s cubic-bezier(0.4, 0.34, 0.16, 0.79);
    transform-origin: 50% 0%;
  }

  &__back-right-paw {
    width: 20px;
    height: 60px;
    border-radius: 10px;
    position: absolute;
    bottom: -11px;
    left: 52px;
    background: $back-paw;
    z-index: -1;
    animation: paw 0.9s infinite 0.2s cubic-bezier(0.4, 0.34, 0.16, 0.79);
    transform-origin: 50% 0%;
  }

  &:after {
    content: "";
    position: absolute;
    display: block;
    width: 190px;
    height: 60px;
    border-radius: 90%;
    animation: shadow 0.4s infinite 0.4s cubic-bezier(0.4, 0.34, 0.16, 0.79);
    background: rgb(194, 215, 254);
    z-index: -2;
    @include transform(rotate(-5deg));
    top: 102px;
    left: -10px;
  }
}
</style>
