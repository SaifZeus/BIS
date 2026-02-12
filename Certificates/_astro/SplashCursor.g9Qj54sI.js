import{j as le}from"./jsx-runtime.D_zvdyIk.js";import{r as ve}from"./index.RH_Wq4ov.js";function je(){return{id:-1,texcoordX:0,texcoordY:0,prevTexcoordX:0,prevTexcoordY:0,deltaX:0,deltaY:0,down:!1,moved:!1,color:{r:0,g:0,b:0}}}function Je({SIM_RESOLUTION:H=128,DYE_RESOLUTION:W=1440,CAPTURE_RESOLUTION:me=512,DENSITY_DISSIPATION:k=3.5,VELOCITY_DISSIPATION:K=2,PRESSURE:j=.1,PRESSURE_ITERATIONS:q=20,CURL:$=3,SPLAT_RADIUS:J=.2,SPLAT_FORCE:Q=6e3,SHADING:Z=!0,COLOR_UPDATE_SPEED:ee=10,BACK_COLOR:de={r:.5,g:0,b:0},TRANSPARENT:he=!0}){const te=ve.useRef(null);return ve.useEffect(()=>{if(typeof window>"u")return;const f=te.current;if(!f)return;let S=[je()],l={SIM_RESOLUTION:H,DYE_RESOLUTION:W,DENSITY_DISSIPATION:k,VELOCITY_DISSIPATION:K,PRESSURE:j,PRESSURE_ITERATIONS:q,CURL:$,SPLAT_RADIUS:J,SPLAT_FORCE:Q,SHADING:Z,COLOR_UPDATE_SPEED:ee};const{gl:t,ext:R}=xe(f);if(!t||!R)return;R.supportLinearFiltering||(l.DYE_RESOLUTION=256,l.SHADING=!1);function xe(e){const i={alpha:!0,depth:!1,stencil:!1,antialias:!1,preserveDrawingBuffer:!1};let r=e.getContext("webgl2",i);if(r||(r=e.getContext("webgl",i)||e.getContext("experimental-webgl",i)),!r)throw new Error("Unable to initialize WebGL.");const o="drawBuffers"in r;let n=!1,a=null;o?(r.getExtension("EXT_color_buffer_float"),n=!!r.getExtension("OES_texture_float_linear")):(a=r.getExtension("OES_texture_half_float"),n=!!r.getExtension("OES_texture_half_float_linear")),r.clearColor(0,0,0,1);const c=o?r.HALF_FLOAT:a&&a.HALF_FLOAT_OES||0;let d,h,D;return o?(d=F(r,r.RGBA16F,r.RGBA,c),h=F(r,r.RG16F,r.RG,c),D=F(r,r.R16F,r.RED,c)):(d=F(r,r.RGBA,r.RGBA,c),h=F(r,r.RGBA,r.RGBA,c),D=F(r,r.RGBA,r.RGBA,c)),{gl:r,ext:{formatRGBA:d,formatRG:h,formatR:D,halfFloatTexType:c,supportLinearFiltering:n}}}function F(e,i,r,o){if(!pe(e,i,r,o)){if("drawBuffers"in e){const n=e;switch(i){case n.R16F:return F(n,n.RG16F,n.RG,o);case n.RG16F:return F(n,n.RGBA16F,n.RGBA,o);default:return null}}return null}return{internalFormat:i,format:r}}function pe(e,i,r,o){const n=e.createTexture();if(!n)return!1;e.bindTexture(e.TEXTURE_2D,n),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texImage2D(e.TEXTURE_2D,0,i,4,4,0,r,o,null);const a=e.createFramebuffer();return a?(e.bindFramebuffer(e.FRAMEBUFFER,a),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0),e.checkFramebufferStatus(e.FRAMEBUFFER)===e.FRAMEBUFFER_COMPLETE):!1}function ge(e){if(!e.length)return 0;let i=0;for(let r=0;r<e.length;r++)i=(i<<5)-i+e.charCodeAt(r),i|=0;return i}function Te(e,i){if(!i)return e;let r="";for(const o of i)r+=`#define ${o}
`;return r+e}function g(e,i,r=null){const o=Te(i,r),n=t.createShader(e);return n?(t.shaderSource(n,o),t.compileShader(n),t.getShaderParameter(n,t.COMPILE_STATUS)||console.trace(t.getShaderInfoLog(n)),n):null}function re(e,i){if(!e||!i)return null;const r=t.createProgram();return r?(t.attachShader(r,e),t.attachShader(r,i),t.linkProgram(r),t.getProgramParameter(r,t.LINK_STATUS)||console.trace(t.getProgramInfoLog(r)),r):null}function ie(e){let i={};const r=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<r;o++){const n=t.getActiveUniform(e,o);n&&(i[n.name]=t.getUniformLocation(e,n.name))}return i}class y{constructor(i,r){this.program=re(i,r),this.uniforms=this.program?ie(this.program):{}}bind(){this.program&&t.useProgram(this.program)}}class Re{constructor(i,r){this.vertexShader=i,this.fragmentShaderSource=r,this.programs={},this.activeProgram=null,this.uniforms={}}setKeywords(i){let r=0;for(const n of i)r+=ge(n);let o=this.programs[r];if(o==null){const n=g(t.FRAGMENT_SHADER,this.fragmentShaderSource,i);o=re(this.vertexShader,n),this.programs[r]=o}o!==this.activeProgram&&(o&&(this.uniforms=ie(o)),this.activeProgram=o)}bind(){this.activeProgram&&t.useProgram(this.activeProgram)}}const E=g(t.VERTEX_SHADER,`
      precision highp float;
      attribute vec2 aPosition;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform vec2 texelSize;

      void main () {
        vUv = aPosition * 0.5 + 0.5;
        vL = vUv - vec2(texelSize.x, 0.0);
        vR = vUv + vec2(texelSize.x, 0.0);
        vT = vUv + vec2(0.0, texelSize.y);
        vB = vUv - vec2(0.0, texelSize.y);
        gl_Position = vec4(aPosition, 0.0, 1.0);
      }
    `),Ee=g(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;

      void main () {
          gl_FragColor = texture2D(uTexture, vUv);
      }
    `),Se=g(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      uniform sampler2D uTexture;
      uniform float value;

      void main () {
          gl_FragColor = value * texture2D(uTexture, vUv);
      }
    `),ye=`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uTexture;
      uniform sampler2D uDithering;
      uniform vec2 ditherScale;
      uniform vec2 texelSize;

      vec3 linearToGamma (vec3 color) {
          color = max(color, vec3(0));
          return max(1.055 * pow(color, vec3(0.416666667)) - 0.055, vec3(0));
      }

      void main () {
          vec3 c = texture2D(uTexture, vUv).rgb;
          #ifdef SHADING
              vec3 lc = texture2D(uTexture, vL).rgb;
              vec3 rc = texture2D(uTexture, vR).rgb;
              vec3 tc = texture2D(uTexture, vT).rgb;
              vec3 bc = texture2D(uTexture, vB).rgb;

              float dx = length(rc) - length(lc);
              float dy = length(tc) - length(bc);

              vec3 n = normalize(vec3(dx, dy, length(texelSize)));
              vec3 l = vec3(0.0, 0.0, 1.0);

              float diffuse = clamp(dot(n, l) + 0.7, 0.7, 1.0);
              c *= diffuse;
          #endif

          float a = max(c.r, max(c.g, c.b));
          gl_FragColor = vec4(c, a);
      }
    `,De=g(t.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uTarget;
      uniform float aspectRatio;
      uniform vec3 color;
      uniform vec2 point;
      uniform float radius;

      void main () {
          vec2 p = vUv - point.xy;
          p.x *= aspectRatio;
          vec3 splat = exp(-dot(p, p) / radius) * color;
          vec3 base = texture2D(uTarget, vUv).xyz;
          gl_FragColor = vec4(base + splat, 1.0);
      }
    `),Fe=g(t.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      uniform sampler2D uVelocity;
      uniform sampler2D uSource;
      uniform vec2 texelSize;
      uniform vec2 dyeTexelSize;
      uniform float dt;
      uniform float dissipation;

      vec4 bilerp (sampler2D sam, vec2 uv, vec2 tsize) {
          vec2 st = uv / tsize - 0.5;
          vec2 iuv = floor(st);
          vec2 fuv = fract(st);

          vec4 a = texture2D(sam, (iuv + vec2(0.5, 0.5)) * tsize);
          vec4 b = texture2D(sam, (iuv + vec2(1.5, 0.5)) * tsize);
          vec4 c = texture2D(sam, (iuv + vec2(0.5, 1.5)) * tsize);
          vec4 d = texture2D(sam, (iuv + vec2(1.5, 1.5)) * tsize);

          return mix(mix(a, b, fuv.x), mix(c, d, fuv.x), fuv.y);
      }

      void main () {
          #ifdef MANUAL_FILTERING
              vec2 coord = vUv - dt * bilerp(uVelocity, vUv, texelSize).xy * texelSize;
              vec4 result = bilerp(uSource, coord, dyeTexelSize);
          #else
              vec2 coord = vUv - dt * texture2D(uVelocity, vUv).xy * texelSize;
              vec4 result = texture2D(uSource, coord);
          #endif
          float decay = 1.0 + dissipation * dt;
          gl_FragColor = result / decay;
      }
    `,R.supportLinearFiltering?null:["MANUAL_FILTERING"]),we=g(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).x;
          float R = texture2D(uVelocity, vR).x;
          float T = texture2D(uVelocity, vT).y;
          float B = texture2D(uVelocity, vB).y;

          vec2 C = texture2D(uVelocity, vUv).xy;
          if (vL.x < 0.0) { L = -C.x; }
          if (vR.x > 1.0) { R = -C.x; }
          if (vT.y > 1.0) { T = -C.y; }
          if (vB.y < 0.0) { B = -C.y; }

          float div = 0.5 * (R - L + T - B);
          gl_FragColor = vec4(div, 0.0, 0.0, 1.0);
      }
    `),_e=g(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uVelocity, vL).y;
          float R = texture2D(uVelocity, vR).y;
          float T = texture2D(uVelocity, vT).x;
          float B = texture2D(uVelocity, vB).x;
          float vorticity = R - L - T + B;
          gl_FragColor = vec4(0.5 * vorticity, 0.0, 0.0, 1.0);
      }
    `),Ae=g(t.FRAGMENT_SHADER,`
      precision highp float;
      precision highp sampler2D;
      varying vec2 vUv;
      varying vec2 vL;
      varying vec2 vR;
      varying vec2 vT;
      varying vec2 vB;
      uniform sampler2D uVelocity;
      uniform sampler2D uCurl;
      uniform float curl;
      uniform float dt;

      void main () {
          float L = texture2D(uCurl, vL).x;
          float R = texture2D(uCurl, vR).x;
          float T = texture2D(uCurl, vT).x;
          float B = texture2D(uCurl, vB).x;
          float C = texture2D(uCurl, vUv).x;

          vec2 force = 0.5 * vec2(abs(T) - abs(B), abs(R) - abs(L));
          force /= length(force) + 0.0001;
          force *= curl * C;
          force.y *= -1.0;

          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity += force * dt;
          velocity = min(max(velocity, -1000.0), 1000.0);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),be=g(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uDivergence;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          float C = texture2D(uPressure, vUv).x;
          float divergence = texture2D(uDivergence, vUv).x;
          float pressure = (L + R + B + T - divergence) * 0.25;
          gl_FragColor = vec4(pressure, 0.0, 0.0, 1.0);
      }
    `),Ue=g(t.FRAGMENT_SHADER,`
      precision mediump float;
      precision mediump sampler2D;
      varying highp vec2 vUv;
      varying highp vec2 vL;
      varying highp vec2 vR;
      varying highp vec2 vT;
      varying highp vec2 vB;
      uniform sampler2D uPressure;
      uniform sampler2D uVelocity;

      void main () {
          float L = texture2D(uPressure, vL).x;
          float R = texture2D(uPressure, vR).x;
          float T = texture2D(uPressure, vT).x;
          float B = texture2D(uPressure, vB).x;
          vec2 velocity = texture2D(uVelocity, vUv).xy;
          velocity.xy -= vec2(R - L, T - B);
          gl_FragColor = vec4(velocity, 0.0, 1.0);
      }
    `),p=(()=>{const e=t.createBuffer();t.bindBuffer(t.ARRAY_BUFFER,e),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),t.STATIC_DRAW);const i=t.createBuffer();return t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,i),t.bufferData(t.ELEMENT_ARRAY_BUFFER,new Uint16Array([0,1,2,0,2,3]),t.STATIC_DRAW),t.vertexAttribPointer(0,2,t.FLOAT,!1,0,0),t.enableVertexAttribArray(0),(r,o=!1)=>{t&&(r?(t.viewport(0,0,r.width,r.height),t.bindFramebuffer(t.FRAMEBUFFER,r.fbo)):(t.viewport(0,0,t.drawingBufferWidth,t.drawingBufferHeight),t.bindFramebuffer(t.FRAMEBUFFER,null)),o&&(t.clearColor(0,0,0,1),t.clear(t.COLOR_BUFFER_BIT)),t.drawElements(t.TRIANGLES,6,t.UNSIGNED_SHORT,0))}})();let x,u,M,G,w;const Y=new y(E,Ee),B=new y(E,Se),v=new y(E,De),s=new y(E,Fe),P=new y(E,we),X=new y(E,_e),T=new y(E,Ae),_=new y(E,be),A=new y(E,Ue),b=new Re(E,ye);function U(e,i,r,o,n,a){t.activeTexture(t.TEXTURE0);const c=t.createTexture();t.bindTexture(t.TEXTURE_2D,c),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,a),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texImage2D(t.TEXTURE_2D,0,r,e,i,0,o,n,null);const d=t.createFramebuffer();t.bindFramebuffer(t.FRAMEBUFFER,d),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,c,0),t.viewport(0,0,e,i),t.clear(t.COLOR_BUFFER_BIT);const h=1/e,D=1/i;return{texture:c,fbo:d,width:e,height:i,texelSizeX:h,texelSizeY:D,attach(L){return t.activeTexture(t.TEXTURE0+L),t.bindTexture(t.TEXTURE_2D,c),L}}}function N(e,i,r,o,n,a){const c=U(e,i,r,o,n,a),d=U(e,i,r,o,n,a);return{width:e,height:i,texelSizeX:c.texelSizeX,texelSizeY:c.texelSizeY,read:c,write:d,swap(){const h=this.read;this.read=this.write,this.write=h}}}function Le(e,i,r,o,n,a,c){const d=U(i,r,o,n,a,c);return Y.bind(),Y.uniforms.uTexture&&t.uniform1i(Y.uniforms.uTexture,e.attach(0)),p(d,!1),d}function oe(e,i,r,o,n,a,c){return e.width===i&&e.height===r||(e.read=Le(e.read,i,r,o,n,a,c),e.write=U(i,r,o,n,a,c),e.width=i,e.height=r,e.texelSizeX=1/i,e.texelSizeY=1/r),e}function ne(){const e=ae(l.SIM_RESOLUTION),i=ae(l.DYE_RESOLUTION),r=R.halfFloatTexType,o=R.formatRGBA,n=R.formatRG,a=R.formatR,c=R.supportLinearFiltering?t.LINEAR:t.NEAREST;t.disable(t.BLEND),x?x=oe(x,i.width,i.height,o.internalFormat,o.format,r,c):x=N(i.width,i.height,o.internalFormat,o.format,r,c),u?u=oe(u,e.width,e.height,n.internalFormat,n.format,r,c):u=N(e.width,e.height,n.internalFormat,n.format,r,c),M=U(e.width,e.height,a.internalFormat,a.format,r,t.NEAREST),G=U(e.width,e.height,a.internalFormat,a.format,r,t.NEAREST),w=N(e.width,e.height,a.internalFormat,a.format,r,t.NEAREST)}function Be(){const e=[];l.SHADING&&e.push("SHADING"),b.setKeywords(e)}function ae(e){const i=t.drawingBufferWidth,r=t.drawingBufferHeight,o=i/r;let n=o<1?1/o:o;const a=Math.round(e),c=Math.round(e*n);return i>r?{width:c,height:a}:{width:a,height:c}}function m(e){const i=window.devicePixelRatio||1;return Math.floor(e*i)}Be(),ne();let ue=Date.now(),z=0;function V(){const e=Pe();Xe()&&ne(),ze(e),Ce(),Me(e),Ge(null),requestAnimationFrame(V)}function Pe(){const e=Date.now();let i=(e-ue)/1e3;return i=Math.min(i,.016666),ue=e,i}function Xe(){const e=m(f.clientWidth),i=m(f.clientHeight);return f.width!==e||f.height!==i?(f.width=e,f.height=i,!0):!1}function ze(e){z+=e*l.COLOR_UPDATE_SPEED,z>=1&&(z=Ke(z,0,1),S.forEach(i=>{i.color=C()}))}function Ce(){for(const e of S)e.moved&&(e.moved=!1,Ne(e))}function Me(e){t.disable(t.BLEND),X.bind(),X.uniforms.texelSize&&t.uniform2f(X.uniforms.texelSize,u.texelSizeX,u.texelSizeY),X.uniforms.uVelocity&&t.uniform1i(X.uniforms.uVelocity,u.read.attach(0)),p(G),T.bind(),T.uniforms.texelSize&&t.uniform2f(T.uniforms.texelSize,u.texelSizeX,u.texelSizeY),T.uniforms.uVelocity&&t.uniform1i(T.uniforms.uVelocity,u.read.attach(0)),T.uniforms.uCurl&&t.uniform1i(T.uniforms.uCurl,G.attach(1)),T.uniforms.curl&&t.uniform1f(T.uniforms.curl,l.CURL),T.uniforms.dt&&t.uniform1f(T.uniforms.dt,e),p(u.write),u.swap(),P.bind(),P.uniforms.texelSize&&t.uniform2f(P.uniforms.texelSize,u.texelSizeX,u.texelSizeY),P.uniforms.uVelocity&&t.uniform1i(P.uniforms.uVelocity,u.read.attach(0)),p(M),B.bind(),B.uniforms.uTexture&&t.uniform1i(B.uniforms.uTexture,w.read.attach(0)),B.uniforms.value&&t.uniform1f(B.uniforms.value,l.PRESSURE),p(w.write),w.swap(),_.bind(),_.uniforms.texelSize&&t.uniform2f(_.uniforms.texelSize,u.texelSizeX,u.texelSizeY),_.uniforms.uDivergence&&t.uniform1i(_.uniforms.uDivergence,M.attach(0));for(let r=0;r<l.PRESSURE_ITERATIONS;r++)_.uniforms.uPressure&&t.uniform1i(_.uniforms.uPressure,w.read.attach(1)),p(w.write),w.swap();A.bind(),A.uniforms.texelSize&&t.uniform2f(A.uniforms.texelSize,u.texelSizeX,u.texelSizeY),A.uniforms.uPressure&&t.uniform1i(A.uniforms.uPressure,w.read.attach(0)),A.uniforms.uVelocity&&t.uniform1i(A.uniforms.uVelocity,u.read.attach(1)),p(u.write),u.swap(),s.bind(),s.uniforms.texelSize&&t.uniform2f(s.uniforms.texelSize,u.texelSizeX,u.texelSizeY),!R.supportLinearFiltering&&s.uniforms.dyeTexelSize&&t.uniform2f(s.uniforms.dyeTexelSize,u.texelSizeX,u.texelSizeY);const i=u.read.attach(0);s.uniforms.uVelocity&&t.uniform1i(s.uniforms.uVelocity,i),s.uniforms.uSource&&t.uniform1i(s.uniforms.uSource,i),s.uniforms.dt&&t.uniform1f(s.uniforms.dt,e),s.uniforms.dissipation&&t.uniform1f(s.uniforms.dissipation,l.VELOCITY_DISSIPATION),p(u.write),u.swap(),!R.supportLinearFiltering&&s.uniforms.dyeTexelSize&&t.uniform2f(s.uniforms.dyeTexelSize,x.texelSizeX,x.texelSizeY),s.uniforms.uVelocity&&t.uniform1i(s.uniforms.uVelocity,u.read.attach(0)),s.uniforms.uSource&&t.uniform1i(s.uniforms.uSource,x.read.attach(1)),s.uniforms.dissipation&&t.uniform1f(s.uniforms.dissipation,l.DENSITY_DISSIPATION),p(x.write),x.swap()}function Ge(e){t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA),t.enable(t.BLEND),Ye(e)}function Ye(e){const i=t.drawingBufferWidth,r=t.drawingBufferHeight;b.bind(),l.SHADING&&b.uniforms.texelSize&&t.uniform2f(b.uniforms.texelSize,1/i,1/r),b.uniforms.uTexture&&t.uniform1i(b.uniforms.uTexture,x.read.attach(0)),p(e,!1)}function Ne(e){const i=e.deltaX*l.SPLAT_FORCE,r=e.deltaY*l.SPLAT_FORCE;ce(e.texcoordX,e.texcoordY,i,r,e.color)}function Ve(e){const i=C();i.r*=10,i.g*=10,i.b*=10;const r=10*(Math.random()-.5),o=30*(Math.random()-.5);ce(e.texcoordX,e.texcoordY,r,o,i)}function ce(e,i,r,o,n){v.bind(),v.uniforms.uTarget&&t.uniform1i(v.uniforms.uTarget,u.read.attach(0)),v.uniforms.aspectRatio&&t.uniform1f(v.uniforms.aspectRatio,f.width/f.height),v.uniforms.point&&t.uniform2f(v.uniforms.point,e,i),v.uniforms.color&&t.uniform3f(v.uniforms.color,r,o,0),v.uniforms.radius&&t.uniform1f(v.uniforms.radius,Ie(l.SPLAT_RADIUS/100)),p(u.write),u.swap(),v.uniforms.uTarget&&t.uniform1i(v.uniforms.uTarget,x.read.attach(0)),v.uniforms.color&&t.uniform3f(v.uniforms.color,n.r,n.g,n.b),p(x.write),x.swap()}function Ie(e){const i=f.width/f.height;return i>1&&(e*=i),e}function I(e,i,r,o){e.id=i,e.down=!0,e.moved=!1,e.texcoordX=r/f.width,e.texcoordY=1-o/f.height,e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.deltaX=0,e.deltaY=0,e.color=C()}function O(e,i,r,o){e.prevTexcoordX=e.texcoordX,e.prevTexcoordY=e.texcoordY,e.texcoordX=i/f.width,e.texcoordY=1-r/f.height,e.deltaX=He(e.texcoordX-e.prevTexcoordX),e.deltaY=We(e.texcoordY-e.prevTexcoordY),e.moved=Math.abs(e.deltaX)>0||Math.abs(e.deltaY)>0,e.color=o}function Oe(e){e.down=!1}function He(e){const i=f.width/f.height;return i<1&&(e*=i),e}function We(e){const i=f.width/f.height;return i>1&&(e/=i),e}function C(){const e=ke(Math.random(),1,1);return e.r*=.15,e.g*=.15,e.b*=.15,e}function ke(e,i,r){let o=0,n=0,a=0;const c=Math.floor(e*6),d=e*6-c,h=r*(1-i),D=r*(1-d*i),L=r*(1-(1-d)*i);switch(c%6){case 0:o=r,n=L,a=h;break;case 1:o=D,n=r,a=h;break;case 2:o=h,n=r,a=L;break;case 3:o=h,n=D,a=r;break;case 4:o=L,n=h,a=r;break;case 5:o=r,n=h,a=D;break}return{r:o,g:n,b:a}}function Ke(e,i,r){const o=r-i;return(e-i)%o+i}window.addEventListener("mousedown",e=>{const i=S[0],r=m(e.clientX),o=m(e.clientY);I(i,-1,r,o),Ve(i)});function se(e){const i=S[0],r=m(e.clientX),o=m(e.clientY),n=C();V(),O(i,r,o,n),document.body.removeEventListener("mousemove",se)}document.body.addEventListener("mousemove",se),window.addEventListener("mousemove",e=>{const i=S[0],r=m(e.clientX),o=m(e.clientY),n=i.color;O(i,r,o,n)});function fe(e){const i=e.targetTouches,r=S[0];for(let o=0;o<i.length;o++){const n=m(i[o].clientX),a=m(i[o].clientY);V(),I(r,i[o].identifier,n,a)}document.body.removeEventListener("touchstart",fe)}document.body.addEventListener("touchstart",fe),window.addEventListener("touchstart",e=>{const i=e.targetTouches,r=S[0];for(let o=0;o<i.length;o++){const n=m(i[o].clientX),a=m(i[o].clientY);I(r,i[o].identifier,n,a)}},!1),window.addEventListener("touchmove",e=>{const i=e.targetTouches,r=S[0];for(let o=0;o<i.length;o++){const n=m(i[o].clientX),a=m(i[o].clientY);O(r,n,a,r.color)}},!1),window.addEventListener("touchend",e=>{const i=e.changedTouches,r=S[0];for(let o=0;o<i.length;o++)Oe(r)})},[H,W,me,k,K,j,q,$,J,Q,Z,ee,de,he]),le.jsx("div",{className:"fixed top-0 left-0 z-50 pointer-events-none w-full h-full",children:le.jsx("canvas",{ref:te,id:"fluid",className:"w-screen h-screen block"})})}export{Je as default};
