(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const ea="165",_c=0,Ta=1,vc=2,na=1,xc=2,hn=3,An=0,Ie=1,dn=2,Tn=0,yi=1,Ea=2,Aa=3,Ra=4,yc=5,Wn=100,Mc=101,Sc=102,bc=103,wc=104,Tc=200,Ec=201,Ac=202,Rc=203,Xr=204,qr=205,Cc=206,Pc=207,Lc=208,Ic=209,Dc=210,Uc=211,kc=212,Nc=213,Fc=214,Oc=0,Bc=1,zc=2,Ps=3,Vc=4,Hc=5,Gc=6,Wc=7,ia=0,Xc=1,qc=2,En=0,Yc=1,jc=2,Kc=3,$c=4,Zc=5,Jc=6,Qc=7,Ca="attached",th="detached",Pl=300,bi=301,wi=302,Yr=303,jr=304,Xs=306,Ls=1e3,Yn=1001,Kr=1002,Ce=1003,eh=1004,Ji=1005,We=1006,ir=1007,bn=1008,Rn=1009,nh=1010,ih=1011,Is=1012,Ll=1013,Ti=1014,Qe=1015,qs=1016,Il=1017,Dl=1018,Ei=1020,sh=35902,rh=1021,ah=1022,qe=1023,oh=1024,lh=1025,Mi=1026,Ai=1027,Ul=1028,kl=1029,ch=1030,Nl=1031,Fl=1033,sr=33776,rr=33777,ar=33778,or=33779,Pa=35840,La=35841,Ia=35842,Da=35843,Ua=36196,ka=37492,Na=37496,Fa=37808,Oa=37809,Ba=37810,za=37811,Va=37812,Ha=37813,Ga=37814,Wa=37815,Xa=37816,qa=37817,Ya=37818,ja=37819,Ka=37820,$a=37821,lr=36492,Za=36494,Ja=36495,hh=36283,Qa=36284,to=36285,eo=36286,dh=2200,uh=2201,fh=2202,Ds=2300,$r=2301,cr=2302,_i=2400,vi=2401,Us=2402,sa=2500,ph=2501,bg=0,wg=1,Tg=2,mh=3200,gh=3201,ra=0,_h=1,Sn="",ze="srgb",Pn="srgb-linear",aa="display-p3",Ys="display-p3-linear",ks="linear",se="srgb",Ns="rec709",Fs="p3",Zn=7680,no=519,vh=512,xh=513,yh=514,Ol=515,Mh=516,Sh=517,bh=518,wh=519,Zr=35044,io="300 es",un=2e3,Os=2001;class $n{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const be=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let so=1234567;const Xi=Math.PI/180,Ri=180/Math.PI;function Ye(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(be[i&255]+be[i>>8&255]+be[i>>16&255]+be[i>>24&255]+"-"+be[t&255]+be[t>>8&255]+"-"+be[t>>16&15|64]+be[t>>24&255]+"-"+be[e&63|128]+be[e>>8&255]+"-"+be[e>>16&255]+be[e>>24&255]+be[n&255]+be[n>>8&255]+be[n>>16&255]+be[n>>24&255]).toLowerCase()}function Te(i,t,e){return Math.max(t,Math.min(e,i))}function oa(i,t){return(i%t+t)%t}function Th(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function Eh(i,t,e){return i!==t?(e-i)/(t-i):0}function qi(i,t,e){return(1-e)*i+e*t}function Ah(i,t,e,n){return qi(i,t,1-Math.exp(-e*n))}function Rh(i,t=1){return t-Math.abs(oa(i,t*2)-t)}function Ch(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function Ph(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function Lh(i,t){return i+Math.floor(Math.random()*(t-i+1))}function Ih(i,t){return i+Math.random()*(t-i)}function Dh(i){return i*(.5-Math.random())}function Uh(i){i!==void 0&&(so=i);let t=so+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function kh(i){return i*Xi}function Nh(i){return i*Ri}function Fh(i){return(i&i-1)===0&&i!==0}function Oh(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Bh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function zh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),c=r((t+n)/2),h=a((t+n)/2),d=r((t-n)/2),u=a((t-n)/2),f=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*d,l*u,o*c);break;case"YZY":i.set(l*u,o*h,l*d,o*c);break;case"ZXZ":i.set(l*d,l*u,o*h,o*c);break;case"XZX":i.set(o*h,l*g,l*f,o*c);break;case"YXY":i.set(l*f,o*h,l*g,o*c);break;case"ZYZ":i.set(l*g,l*f,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function $t(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const pe={DEG2RAD:Xi,RAD2DEG:Ri,generateUUID:Ye,clamp:Te,euclideanModulo:oa,mapLinear:Th,inverseLerp:Eh,lerp:qi,damp:Ah,pingpong:Rh,smoothstep:Ch,smootherstep:Ph,randInt:Lh,randFloat:Ih,randFloatSpread:Dh,seededRandom:Uh,degToRad:kh,radToDeg:Nh,isPowerOfTwo:Fh,ceilPowerOfTwo:Oh,floorPowerOfTwo:Bh,setQuaternionFromProperEuler:zh,normalize:$t,denormalize:Xe};class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class It{constructor(t,e,n,s,r,a,o,l,c){It.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],v=s[1],y=s[4],w=s[7],D=s[2],E=s[5],R=s[8];return r[0]=a*_+o*v+l*D,r[3]=a*p+o*y+l*E,r[6]=a*m+o*w+l*R,r[1]=c*_+h*v+d*D,r[4]=c*p+h*y+d*E,r[7]=c*m+h*w+d*R,r[2]=u*_+f*v+g*D,r[5]=u*p+f*y+g*E,r[8]=u*m+f*w+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=d*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=u*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=f*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(hr.makeScale(t,e)),this}rotate(t){return this.premultiply(hr.makeRotation(-t)),this}translate(t,e){return this.premultiply(hr.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const hr=new It;function Bl(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Yi(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Vh(){const i=Yi("canvas");return i.style.display="block",i}const ro={};function la(i){i in ro||(ro[i]=!0,console.warn(i))}function Hh(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}const ao=new It().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),oo=new It().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Qi={[Pn]:{transfer:ks,primaries:Ns,toReference:i=>i,fromReference:i=>i},[ze]:{transfer:se,primaries:Ns,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ys]:{transfer:ks,primaries:Fs,toReference:i=>i.applyMatrix3(oo),fromReference:i=>i.applyMatrix3(ao)},[aa]:{transfer:se,primaries:Fs,toReference:i=>i.convertSRGBToLinear().applyMatrix3(oo),fromReference:i=>i.applyMatrix3(ao).convertLinearToSRGB()}},Gh=new Set([Pn,Ys]),Jt={enabled:!0,_workingColorSpace:Pn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!Gh.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,t,e){if(this.enabled===!1||t===e||!t||!e)return i;const n=Qi[t].toReference,s=Qi[e].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,t){return this.convert(i,this._workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this._workingColorSpace)},getPrimaries:function(i){return Qi[i].primaries},getTransfer:function(i){return i===Sn?ks:Qi[i].transfer}};function Si(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function dr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Jn;class Wh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Jn===void 0&&(Jn=Yi("canvas")),Jn.width=t.width,Jn.height=t.height;const n=Jn.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Jn}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Yi("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Si(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Si(e[n]/255)*255):e[n]=Si(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Xh=0;class zl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=Ye(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(ur(s[a].image)):r.push(ur(s[a]))}else r=ur(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function ur(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Wh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let qh=0;class Se extends $n{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,n=Yn,s=Yn,r=We,a=bn,o=qe,l=Rn,c=Se.DEFAULT_ANISOTROPY,h=Sn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=Ye(),this.name="",this.source=new zl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new It,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Pl)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ls:t.x=t.x-Math.floor(t.x);break;case Yn:t.x=t.x<0?0:1;break;case Kr:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ls:t.y=t.y-Math.floor(t.y);break;case Yn:t.y=t.y<0?0:1;break;case Kr:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Se.DEFAULT_IMAGE=null;Se.DEFAULT_MAPPING=Pl;Se.DEFAULT_ANISOTROPY=1;class ne{constructor(t=0,e=0,n=0,s=1){ne.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,w=(f+1)/2,D=(m+1)/2,E=(h+u)/4,R=(d+_)/4,C=(g+p)/4;return y>w&&y>D?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=E/n,r=R/n):w>D?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=E/s,r=C/s):D<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(D),n=R/r,s=C/r),this.set(n,s,r,e),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Yh extends $n{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ne(0,0,t,e),this.scissorTest=!1,this.viewport=new ne(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:We,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Se(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new zl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jn extends Yh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Vl extends Se{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class jh extends Se{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Ce,this.minFilter=Ce,this.wrapR=Yn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class fn{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3];const u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d;return}if(o===1){t[e+0]=u,t[e+1]=f,t[e+2]=g,t[e+3]=_;return}if(d!==_||l!==u||c!==f||h!==g){let p=1-o;const m=l*u+c*f+h*g+d*_,v=m>=0?1:-1,y=1-m*m;if(y>Number.EPSILON){const D=Math.sqrt(y),E=Math.atan2(D,m*v);p=Math.sin(p*E)/D,o=Math.sin(o*E)/D}const w=o*v;if(l=l*p+u*w,c=c*p+f*w,h=h*p+g*w,d=d*p+_*w,p===1-o){const D=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=D,c*=D,h*=D,d*=D}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+o+d;if(u>0){const f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){const f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){const f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Te(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-e;return this._w=f*a+e*this._w,this._x=f*n+e*this._x,this._y=f*s+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-e)*h)/c,u=Math.sin(e*h)/c;return this._w=a*d+this._w*u,this._x=n*d+this._x*u,this._y=s*d+this._y*u,this._z=r*d+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class T{constructor(t=0,e=0,n=0){T.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(lo.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(lo.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),d=2*(r*n-a*e);return this.x=e+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return fr.copy(this).projectOnVector(t),this.sub(fr)}reflect(t){return this.sub(fr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Te(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const fr=new T,lo=new fn;class Ln{constructor(t=new T(1/0,1/0,1/0),e=new T(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ve.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ve.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ve.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Ve):Ve.fromBufferAttribute(r,a),Ve.applyMatrix4(t.matrixWorld),this.expandByPoint(Ve);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),ts.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ts.copy(n.boundingBox)),ts.applyMatrix4(t.matrixWorld),this.union(ts)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Ve),Ve.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ui),es.subVectors(this.max,Ui),Qn.subVectors(t.a,Ui),ti.subVectors(t.b,Ui),ei.subVectors(t.c,Ui),gn.subVectors(ti,Qn),_n.subVectors(ei,ti),kn.subVectors(Qn,ei);let e=[0,-gn.z,gn.y,0,-_n.z,_n.y,0,-kn.z,kn.y,gn.z,0,-gn.x,_n.z,0,-_n.x,kn.z,0,-kn.x,-gn.y,gn.x,0,-_n.y,_n.x,0,-kn.y,kn.x,0];return!pr(e,Qn,ti,ei,es)||(e=[1,0,0,0,1,0,0,0,1],!pr(e,Qn,ti,ei,es))?!1:(ns.crossVectors(gn,_n),e=[ns.x,ns.y,ns.z],pr(e,Qn,ti,ei,es))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ve).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ve).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(nn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),nn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),nn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),nn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),nn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),nn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),nn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),nn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(nn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const nn=[new T,new T,new T,new T,new T,new T,new T,new T],Ve=new T,ts=new Ln,Qn=new T,ti=new T,ei=new T,gn=new T,_n=new T,kn=new T,Ui=new T,es=new T,ns=new T,Nn=new T;function pr(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Nn.fromArray(i,r);const o=s.x*Math.abs(Nn.x)+s.y*Math.abs(Nn.y)+s.z*Math.abs(Nn.z),l=t.dot(Nn),c=e.dot(Nn),h=n.dot(Nn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Kh=new Ln,ki=new T,mr=new T;class pn{constructor(t=new T,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Kh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ki.subVectors(t,this.center);const e=ki.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(mr.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ki.copy(t.center).add(mr)),this.expandByPoint(ki.copy(t.center).sub(mr))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const sn=new T,gr=new T,is=new T,vn=new T,_r=new T,ss=new T,vr=new T;class js{constructor(t=new T,e=new T(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,sn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=sn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(sn.copy(this.origin).addScaledVector(this.direction,e),sn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){gr.copy(t).add(e).multiplyScalar(.5),is.copy(e).sub(t).normalize(),vn.copy(this.origin).sub(gr);const r=t.distanceTo(e)*.5,a=-this.direction.dot(is),o=vn.dot(this.direction),l=-vn.dot(is),c=vn.lengthSq(),h=Math.abs(1-a*a);let d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){const _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(gr).addScaledVector(is,u),f}intersectSphere(t,e){sn.subVectors(t.center,this.origin);const n=sn.dot(this.direction),s=sn.dot(sn)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,sn)!==null}intersectTriangle(t,e,n,s,r){_r.subVectors(e,t),ss.subVectors(n,t),vr.crossVectors(_r,ss);let a=this.direction.dot(vr),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;vn.subVectors(this.origin,t);const l=o*this.direction.dot(ss.crossVectors(vn,ss));if(l<0)return null;const c=o*this.direction.dot(_r.cross(vn));if(c<0||l+c>a)return null;const h=-o*vn.dot(vr);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ot{constructor(t,e,n,s,r,a,o,l,c,h,d,u,f,g,_,p){Ot.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,_,p)}set(t,e,n,s,r,a,o,l,c,h,d,u,f,g,_,p){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ot().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ni.setFromMatrixColumn(t,0).length(),r=1/ni.setFromMatrixColumn(t,1).length(),a=1/ni.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){const u=a*h,f=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-_*c,e[9]=-o*l,e[2]=_-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u+_*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=_+u*o,e[10]=a*l}else if(t.order==="ZXY"){const u=l*h,f=l*d,g=c*h,_=c*d;e[0]=u-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=_-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const u=a*h,f=a*d,g=o*h,_=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+_,e[1]=l*d,e[5]=_*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const u=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-_*d}else if(t.order==="XZY"){const u=a*l,f=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+_,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=_*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose($h,t,Zh)}lookAt(t,e,n){const s=this.elements;return ke.subVectors(t,e),ke.lengthSq()===0&&(ke.z=1),ke.normalize(),xn.crossVectors(n,ke),xn.lengthSq()===0&&(Math.abs(n.z)===1?ke.x+=1e-4:ke.z+=1e-4,ke.normalize(),xn.crossVectors(n,ke)),xn.normalize(),rs.crossVectors(ke,xn),s[0]=xn.x,s[4]=rs.x,s[8]=ke.x,s[1]=xn.y,s[5]=rs.y,s[9]=ke.y,s[2]=xn.z,s[6]=rs.z,s[10]=ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],y=n[7],w=n[11],D=n[15],E=s[0],R=s[4],C=s[8],b=s[12],x=s[1],P=s[5],B=s[9],F=s[13],V=s[2],q=s[6],H=s[10],Z=s[14],G=s[3],it=s[7],lt=s[11],dt=s[15];return r[0]=a*E+o*x+l*V+c*G,r[4]=a*R+o*P+l*q+c*it,r[8]=a*C+o*B+l*H+c*lt,r[12]=a*b+o*F+l*Z+c*dt,r[1]=h*E+d*x+u*V+f*G,r[5]=h*R+d*P+u*q+f*it,r[9]=h*C+d*B+u*H+f*lt,r[13]=h*b+d*F+u*Z+f*dt,r[2]=g*E+_*x+p*V+m*G,r[6]=g*R+_*P+p*q+m*it,r[10]=g*C+_*B+p*H+m*lt,r[14]=g*b+_*F+p*Z+m*dt,r[3]=v*E+y*x+w*V+D*G,r[7]=v*R+y*P+w*q+D*it,r[11]=v*C+y*B+w*H+D*lt,r[15]=v*b+y*F+w*Z+D*dt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],_=t[7],p=t[11],m=t[15];return g*(+r*l*d-s*c*d-r*o*u+n*c*u+s*o*f-n*l*f)+_*(+e*l*f-e*c*u+r*a*u-s*a*f+s*c*h-r*l*h)+p*(+e*c*d-e*o*f-r*a*d+n*a*f+r*o*h-n*c*h)+m*(-s*o*h-e*l*d+e*o*u+s*a*d-n*a*u+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],_=t[13],p=t[14],m=t[15],v=d*p*c-_*u*c+_*l*f-o*p*f-d*l*m+o*u*m,y=g*u*c-h*p*c-g*l*f+a*p*f+h*l*m-a*u*m,w=h*_*c-g*d*c+g*o*f-a*_*f-h*o*m+a*d*m,D=g*d*l-h*_*l-g*o*u+a*_*u+h*o*p-a*d*p,E=e*v+n*y+s*w+r*D;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/E;return t[0]=v*R,t[1]=(_*u*r-d*p*r-_*s*f+n*p*f+d*s*m-n*u*m)*R,t[2]=(o*p*r-_*l*r+_*s*c-n*p*c-o*s*m+n*l*m)*R,t[3]=(d*l*r-o*u*r-d*s*c+n*u*c+o*s*f-n*l*f)*R,t[4]=y*R,t[5]=(h*p*r-g*u*r+g*s*f-e*p*f-h*s*m+e*u*m)*R,t[6]=(g*l*r-a*p*r-g*s*c+e*p*c+a*s*m-e*l*m)*R,t[7]=(a*u*r-h*l*r+h*s*c-e*u*c-a*s*f+e*l*f)*R,t[8]=w*R,t[9]=(g*d*r-h*_*r-g*n*f+e*_*f+h*n*m-e*d*m)*R,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*m+e*o*m)*R,t[11]=(h*o*r-a*d*r-h*n*c+e*d*c+a*n*f-e*o*f)*R,t[12]=D*R,t[13]=(h*_*s-g*d*s+g*n*u-e*_*u-h*n*p+e*d*p)*R,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*p-e*o*p)*R,t[15]=(a*d*s-h*o*s+h*n*l-e*d*l-a*n*u+e*o*u)*R,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,_=a*h,p=a*d,m=o*d,v=l*c,y=l*h,w=l*d,D=n.x,E=n.y,R=n.z;return s[0]=(1-(_+m))*D,s[1]=(f+w)*D,s[2]=(g-y)*D,s[3]=0,s[4]=(f-w)*E,s[5]=(1-(u+m))*E,s[6]=(p+v)*E,s[7]=0,s[8]=(g+y)*R,s[9]=(p-v)*R,s[10]=(1-(u+_))*R,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ni.set(s[0],s[1],s[2]).length();const a=ni.set(s[4],s[5],s[6]).length(),o=ni.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],He.copy(this);const c=1/r,h=1/a,d=1/o;return He.elements[0]*=c,He.elements[1]*=c,He.elements[2]*=c,He.elements[4]*=h,He.elements[5]*=h,He.elements[6]*=h,He.elements[8]*=d,He.elements[9]*=d,He.elements[10]*=d,e.setFromRotationMatrix(He),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=un){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),d=(e+t)/(e-t),u=(n+s)/(n-s);let f,g;if(o===un)f=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Os)f=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=un){const l=this.elements,c=1/(e-t),h=1/(n-s),d=1/(a-r),u=(e+t)*c,f=(n+s)*h;let g,_;if(o===un)g=(a+r)*d,_=-2*d;else if(o===Os)g=r*d,_=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-u,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ni=new T,He=new Ot,$h=new T(0,0,0),Zh=new T(1,1,1),xn=new T,rs=new T,ke=new T,co=new Ot,ho=new fn;class je{constructor(t=0,e=0,n=0,s=je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Te(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Te(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Te(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Te(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Te(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Te(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return co.makeRotationFromQuaternion(t),this.setFromRotationMatrix(co,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ho.setFromEuler(this),this.setFromQuaternion(ho,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}je.DEFAULT_ORDER="XYZ";class Hl{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Jh=0;const uo=new T,ii=new fn,rn=new Ot,as=new T,Ni=new T,Qh=new T,td=new fn,fo=new T(1,0,0),po=new T(0,1,0),mo=new T(0,0,1),go={type:"added"},ed={type:"removed"},si={type:"childadded",child:null},xr={type:"childremoved",child:null};class ae extends $n{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Jh++}),this.uuid=Ye(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ae.DEFAULT_UP.clone();const t=new T,e=new je,n=new fn,s=new T(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ot},normalMatrix:{value:new It}}),this.matrix=new Ot,this.matrixWorld=new Ot,this.matrixAutoUpdate=ae.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.multiply(ii),this}rotateOnWorldAxis(t,e){return ii.setFromAxisAngle(t,e),this.quaternion.premultiply(ii),this}rotateX(t){return this.rotateOnAxis(fo,t)}rotateY(t){return this.rotateOnAxis(po,t)}rotateZ(t){return this.rotateOnAxis(mo,t)}translateOnAxis(t,e){return uo.copy(t).applyQuaternion(this.quaternion),this.position.add(uo.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(fo,t)}translateY(t){return this.translateOnAxis(po,t)}translateZ(t){return this.translateOnAxis(mo,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?as.copy(t):as.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Ni.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rn.lookAt(Ni,as,this.up):rn.lookAt(as,Ni,this.up),this.quaternion.setFromRotationMatrix(rn),s&&(rn.extractRotation(s.matrixWorld),ii.setFromRotationMatrix(rn),this.quaternion.premultiply(ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(go),si.child=t,this.dispatchEvent(si),si.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ed),xr.child=t,this.dispatchEvent(xr),xr.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(go),si.child=t,this.dispatchEvent(si),si.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,t,Qh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ni,td,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++){const o=s[r];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxGeometryCount=this._maxGeometryCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}ae.DEFAULT_UP=new T(0,1,0);ae.DEFAULT_MATRIX_AUTO_UPDATE=!0;ae.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ge=new T,an=new T,yr=new T,on=new T,ri=new T,ai=new T,_o=new T,Mr=new T,Sr=new T,br=new T;class Je{constructor(t=new T,e=new T,n=new T){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Ge.subVectors(t,e),s.cross(Ge);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Ge.subVectors(s,e),an.subVectors(n,e),yr.subVectors(t,e);const a=Ge.dot(Ge),o=Ge.dot(an),l=Ge.dot(yr),c=an.dot(an),h=an.dot(yr),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;const u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,on)===null?!1:on.x>=0&&on.y>=0&&on.x+on.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,on)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,on.x),l.addScaledVector(a,on.y),l.addScaledVector(o,on.z),l)}static isFrontFacing(t,e,n,s){return Ge.subVectors(n,e),an.subVectors(t,e),Ge.cross(an).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ge.subVectors(this.c,this.b),an.subVectors(this.a,this.b),Ge.cross(an).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Je.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;ri.subVectors(s,n),ai.subVectors(r,n),Mr.subVectors(t,n);const l=ri.dot(Mr),c=ai.dot(Mr);if(l<=0&&c<=0)return e.copy(n);Sr.subVectors(t,s);const h=ri.dot(Sr),d=ai.dot(Sr);if(h>=0&&d<=h)return e.copy(s);const u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(ri,a);br.subVectors(t,r);const f=ri.dot(br),g=ai.dot(br);if(g>=0&&f<=g)return e.copy(r);const _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(ai,o);const p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return _o.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(_o,o);const m=1/(p+_+u);return a=_*m,o=u*m,e.copy(n).addScaledVector(ri,a).addScaledVector(ai,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gl={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},yn={h:0,s:0,l:0},os={h:0,s:0,l:0};function wr(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Rt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ze){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Jt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Jt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Jt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Jt.workingColorSpace){if(t=oa(t,1),e=Te(e,0,1),n=Te(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=wr(a,r,t+1/3),this.g=wr(a,r,t),this.b=wr(a,r,t-1/3)}return Jt.toWorkingColorSpace(this,s),this}setStyle(t,e=ze){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ze){const n=Gl[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Si(t.r),this.g=Si(t.g),this.b=Si(t.b),this}copyLinearToSRGB(t){return this.r=dr(t.r),this.g=dr(t.g),this.b=dr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ze){return Jt.fromWorkingColorSpace(we.copy(this),t),Math.round(Te(we.r*255,0,255))*65536+Math.round(Te(we.g*255,0,255))*256+Math.round(Te(we.b*255,0,255))}getHexString(t=ze){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Jt.workingColorSpace){Jt.fromWorkingColorSpace(we.copy(this),e);const n=we.r,s=we.g,r=we.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Jt.workingColorSpace){return Jt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=ze){Jt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,s=we.b;return t!==ze?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(yn),this.setHSL(yn.h+t,yn.s+e,yn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(yn),t.getHSL(os);const n=qi(yn.h,os.h,e),s=qi(yn.s,os.s,e),r=qi(yn.l,os.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Rt;Rt.NAMES=Gl;let nd=0;class In extends $n{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=Ye(),this.name="",this.type="Material",this.blending=yi,this.side=An,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xr,this.blendDst=qr,this.blendEquation=Wn,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=no,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Zn,this.stencilZFail=Zn,this.stencilZPass=Zn,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==yi&&(n.blending=this.blending),this.side!==An&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xr&&(n.blendSrc=this.blendSrc),this.blendDst!==qr&&(n.blendDst=this.blendDst),this.blendEquation!==Wn&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ps&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==no&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Zn&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Zn&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Zn&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Pi extends In{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const fe=new T,ls=new Ct;class De{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Zr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=Qe,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return la("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ls.fromBufferAttribute(this,e),ls.applyMatrix3(t),this.setXY(e,ls.x,ls.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix3(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyMatrix4(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.applyNormalMatrix(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fe.fromBufferAttribute(this,e),fe.transformDirection(t),this.setXYZ(e,fe.x,fe.y,fe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Xe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Xe(e,this.array)),e}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Xe(e,this.array)),e}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Xe(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Xe(e,this.array)),e}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zr&&(t.usage=this.usage),t}}class Wl extends De{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Xl extends De{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends De{constructor(t,e,n){super(new Float32Array(t),e,n)}}let id=0;const Be=new Ot,Tr=new ae,oi=new T,Ne=new Ln,Fi=new Ln,xe=new T;class Fe extends $n{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:id++}),this.uuid=Ye(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Bl(t)?Xl:Wl)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new It().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return Tr.lookAt(t),Tr.updateMatrix(),this.applyMatrix4(Tr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(oi).negate(),this.translate(oi.x,oi.y,oi.z),this}setFromPoints(t){const e=[];for(let n=0,s=t.length;n<s;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new ye(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ln);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new T(-1/0,-1/0,-1/0),new T(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ne.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ne.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ne.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ne.min),this.boundingBox.expandByPoint(Ne.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new T,1/0);return}if(t){const n=this.boundingSphere.center;if(Ne.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Fi.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Ne.min,Fi.min),Ne.expandByPoint(xe),xe.addVectors(Ne.max,Fi.max),Ne.expandByPoint(xe)):(Ne.expandByPoint(Fi.min),Ne.expandByPoint(Fi.max))}Ne.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)xe.fromBufferAttribute(o,c),l&&(oi.fromBufferAttribute(t,c),xe.add(oi)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new De(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new T,l[C]=new T;const c=new T,h=new T,d=new T,u=new Ct,f=new Ct,g=new Ct,_=new T,p=new T;function m(C,b,x){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,x),u.fromBufferAttribute(r,C),f.fromBufferAttribute(r,b),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),f.sub(u),g.sub(u);const P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[C].add(_),o[b].add(_),o[x].add(_),l[C].add(p),l[b].add(p),l[x].add(p))}let v=this.groups;v.length===0&&(v=[{start:0,count:t.count}]);for(let C=0,b=v.length;C<b;++C){const x=v[C],P=x.start,B=x.count;for(let F=P,V=P+B;F<V;F+=3)m(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const y=new T,w=new T,D=new T,E=new T;function R(C){D.fromBufferAttribute(s,C),E.copy(D);const b=o[C];y.copy(b),y.sub(D.multiplyScalar(D.dot(b))).normalize(),w.crossVectors(E,b);const P=w.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,P)}for(let C=0,b=v.length;C<b;++C){const x=v[C],P=x.start,B=x.count;for(let F=P,V=P+B;F<V;F+=3)R(t.getX(F+0)),R(t.getX(F+1)),R(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new De(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);const s=new T,r=new T,a=new T,o=new T,l=new T,c=new T,h=new T,d=new T;if(t)for(let u=0,f=t.count;u<f;u+=3){const g=t.getX(u+0),_=t.getX(u+1),p=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h);let f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new De(u,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Fe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){const u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){const f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const vo=new Ot,Fn=new js,cs=new pn,xo=new T,li=new T,ci=new T,hi=new T,Er=new T,hs=new T,ds=new Ct,us=new Ct,fs=new Ct,yo=new T,Mo=new T,So=new T,ps=new T,ms=new T;class pt extends ae{constructor(t=new Fe,e=new Pi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){hs.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],d=r[l];h!==0&&(Er.fromBufferAttribute(d,t),a?hs.addScaledVector(Er,h):hs.addScaledVector(Er.sub(e),h))}e.add(hs)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),cs.copy(n.boundingSphere),cs.applyMatrix4(r),Fn.copy(t.ray).recast(t.near),!(cs.containsPoint(Fn.origin)===!1&&(Fn.intersectSphere(cs,xo)===null||Fn.origin.distanceToSquared(xo)>(t.far-t.near)**2))&&(vo.copy(r).invert(),Fn.copy(t.ray).applyMatrix4(vo),!(n.boundingBox!==null&&Fn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Fn)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let w=v,D=y;w<D;w+=3){const E=o.getX(w),R=o.getX(w+1),C=o.getX(w+2);s=gs(this,m,t,n,c,h,d,E,R,C),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=o.getX(p),y=o.getX(p+1),w=o.getX(p+2);s=gs(this,a,t,n,c,h,d,v,y,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){const p=u[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),y=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let w=v,D=y;w<D;w+=3){const E=w,R=w+1,C=w+2;s=gs(this,m,t,n,c,h,d,E,R,C),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){const v=p,y=p+1,w=p+2;s=gs(this,a,t,n,c,h,d,v,y,w),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function sd(i,t,e,n,s,r,a,o){let l;if(t.side===Ie?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===An,o),l===null)return null;ms.copy(o),ms.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(ms);return c<e.near||c>e.far?null:{distance:c,point:ms.clone(),object:i}}function gs(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,li),i.getVertexPosition(l,ci),i.getVertexPosition(c,hi);const h=sd(i,t,e,n,li,ci,hi,ps);if(h){s&&(ds.fromBufferAttribute(s,o),us.fromBufferAttribute(s,l),fs.fromBufferAttribute(s,c),h.uv=Je.getInterpolation(ps,li,ci,hi,ds,us,fs,new Ct)),r&&(ds.fromBufferAttribute(r,o),us.fromBufferAttribute(r,l),fs.fromBufferAttribute(r,c),h.uv1=Je.getInterpolation(ps,li,ci,hi,ds,us,fs,new Ct)),a&&(yo.fromBufferAttribute(a,o),Mo.fromBufferAttribute(a,l),So.fromBufferAttribute(a,c),h.normal=Je.getInterpolation(ps,li,ci,hi,yo,Mo,So,new T),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a:o,b:l,c,normal:new T,materialIndex:0};Je.getNormal(li,ci,hi,d.normal),h.face=d}return h}class Et extends Fe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],d=[];let u=0,f=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(d,2));function g(_,p,m,v,y,w,D,E,R,C,b){const x=w/R,P=D/C,B=w/2,F=D/2,V=E/2,q=R+1,H=C+1;let Z=0,G=0;const it=new T;for(let lt=0;lt<H;lt++){const dt=lt*P-F;for(let At=0;At<q;At++){const Qt=At*x-B;it[_]=Qt*v,it[p]=dt*y,it[m]=V,c.push(it.x,it.y,it.z),it[_]=0,it[p]=0,it[m]=E>0?1:-1,h.push(it.x,it.y,it.z),d.push(At/R),d.push(1-lt/C),Z+=1}}for(let lt=0;lt<C;lt++)for(let dt=0;dt<R;dt++){const At=u+dt+q*lt,Qt=u+dt+q*(lt+1),X=u+(dt+1)+q*(lt+1),J=u+(dt+1)+q*lt;l.push(At,Qt,J),l.push(Qt,X,J),G+=6}o.addGroup(f,G,b),f+=G,u+=Z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Et(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ci(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Re(i){const t={};for(let e=0;e<i.length;e++){const n=Ci(i[e]);for(const s in n)t[s]=n[s]}return t}function rd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ql(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Jt.workingColorSpace}const ad={clone:Ci,merge:Re};var od=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ld=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Cn extends In{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=od,this.fragmentShader=ld,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ci(t.uniforms),this.uniformsGroups=rd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Yl extends ae{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ot,this.projectionMatrix=new Ot,this.projectionMatrixInverse=new Ot,this.coordinateSystem=un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mn=new T,bo=new Ct,wo=new Ct;class Le extends Yl{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ri*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xi*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ri*2*Math.atan(Math.tan(Xi*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Mn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z),Mn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Mn.x,Mn.y).multiplyScalar(-t/Mn.z)}getViewSize(t,e){return this.getViewBounds(t,bo,wo),e.subVectors(wo,bo)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xi*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const di=-90,ui=1;class cd extends ae{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Le(di,ui,t,e);s.layers=this.layers,this.add(s);const r=new Le(di,ui,t,e);r.layers=this.layers,this.add(r);const a=new Le(di,ui,t,e);a.layers=this.layers,this.add(a);const o=new Le(di,ui,t,e);o.layers=this.layers,this.add(o);const l=new Le(di,ui,t,e);l.layers=this.layers,this.add(l);const c=new Le(di,ui,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Os)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class jl extends Se{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:bi,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class hd extends jn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new jl(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:We}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Et(5,5,5),r=new Cn({name:"CubemapFromEquirect",uniforms:Ci(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ie,blending:Tn});r.uniforms.tEquirect.value=e;const a=new pt(s,r),o=e.minFilter;return e.minFilter===bn&&(e.minFilter=We),new cd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Ar=new T,dd=new T,ud=new It;class Hn{constructor(t=new T(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Ar.subVectors(n,e).cross(dd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Ar),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||ud.getNormalMatrix(t),s=this.coplanarPoint(Ar).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const On=new pn,_s=new T;class ca{constructor(t=new Hn,e=new Hn,n=new Hn,s=new Hn,r=new Hn,a=new Hn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=un){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],u=s[7],f=s[8],g=s[9],_=s[10],p=s[11],m=s[12],v=s[13],y=s[14],w=s[15];if(n[0].setComponents(l-r,u-c,p-f,w-m).normalize(),n[1].setComponents(l+r,u+c,p+f,w+m).normalize(),n[2].setComponents(l+a,u+h,p+g,w+v).normalize(),n[3].setComponents(l-a,u-h,p-g,w-v).normalize(),n[4].setComponents(l-o,u-d,p-_,w-y).normalize(),e===un)n[5].setComponents(l+o,u+d,p+_,w+y).normalize();else if(e===Os)n[5].setComponents(o,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),On.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),On.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(On)}intersectsSprite(t){return On.center.set(0,0,0),On.radius=.7071067811865476,On.applyMatrix4(t.matrixWorld),this.intersectsSphere(On)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(_s.x=s.normal.x>0?t.max.x:t.min.x,_s.y=s.normal.y>0?t.max.y:t.min.y,_s.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(_s)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kl(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function fd(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){const h=l.array,d=l._updateRange,u=l.updateRanges;if(i.bindBuffer(c,o),d.count===-1&&u.length===0&&i.bufferSubData(c,0,h),u.length!==0){for(let f=0,g=u.length;f<g;f++){const _=u[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}d.count!==-1&&(i.bufferSubData(c,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count),d.count=-1),l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class Kn extends Fe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){const v=m*u-a;for(let y=0;y<c;y++){const w=y*d-r;g.push(w,-v,0),_.push(0,0,1),p.push(y/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){const y=v+c*m,w=v+c*(m+1),D=v+1+c*(m+1),E=v+1+c*m;f.push(y,w,E),f.push(w,D,E)}this.setIndex(f),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kn(t.width,t.height,t.widthSegments,t.heightSegments)}}var pd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,md=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,gd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_d=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xd=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,yd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Md=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Sd=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,bd=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,wd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Td=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Ed=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ad=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rd=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Cd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Pd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ld=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Id=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Dd=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ud=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Nd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,Fd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Od=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Bd=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,zd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Vd=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hd=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wd="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xd=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,qd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Yd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,jd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,$d=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Zd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,eu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,iu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,su=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ru=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,au=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ou=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lu=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hu=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,du=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,uu=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,fu=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,pu=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,mu=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,gu=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_u=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vu=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xu=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,yu=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Mu=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Su=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,bu=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wu=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Tu=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Eu=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Au=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ru=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cu=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Pu=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Lu=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Iu=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Du=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Uu=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ku=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Nu=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Fu=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ou=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bu=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zu=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Vu=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Hu=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Gu=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wu=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xu=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,qu=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Yu=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ju=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ku=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,$u=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zu=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Ju=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qu=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,tf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ef=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,nf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,sf=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,af=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,of=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,lf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,hf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,df=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uf=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ff=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const pf=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,mf=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_f=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xf=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mf=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sf=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,bf=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,wf=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Tf=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ef=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Af=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rf=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Cf=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pf=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Lf=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,If=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Df=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Uf=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kf=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Nf=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ff=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Of=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bf=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zf=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vf=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hf=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wf=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xf=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qf=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Yf=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lt={alphahash_fragment:pd,alphahash_pars_fragment:md,alphamap_fragment:gd,alphamap_pars_fragment:_d,alphatest_fragment:vd,alphatest_pars_fragment:xd,aomap_fragment:yd,aomap_pars_fragment:Md,batching_pars_vertex:Sd,batching_vertex:bd,begin_vertex:wd,beginnormal_vertex:Td,bsdfs:Ed,iridescence_fragment:Ad,bumpmap_pars_fragment:Rd,clipping_planes_fragment:Cd,clipping_planes_pars_fragment:Pd,clipping_planes_pars_vertex:Ld,clipping_planes_vertex:Id,color_fragment:Dd,color_pars_fragment:Ud,color_pars_vertex:kd,color_vertex:Nd,common:Fd,cube_uv_reflection_fragment:Od,defaultnormal_vertex:Bd,displacementmap_pars_vertex:zd,displacementmap_vertex:Vd,emissivemap_fragment:Hd,emissivemap_pars_fragment:Gd,colorspace_fragment:Wd,colorspace_pars_fragment:Xd,envmap_fragment:qd,envmap_common_pars_fragment:Yd,envmap_pars_fragment:jd,envmap_pars_vertex:Kd,envmap_physical_pars_fragment:au,envmap_vertex:$d,fog_vertex:Zd,fog_pars_vertex:Jd,fog_fragment:Qd,fog_pars_fragment:tu,gradientmap_pars_fragment:eu,lightmap_pars_fragment:nu,lights_lambert_fragment:iu,lights_lambert_pars_fragment:su,lights_pars_begin:ru,lights_toon_fragment:ou,lights_toon_pars_fragment:lu,lights_phong_fragment:cu,lights_phong_pars_fragment:hu,lights_physical_fragment:du,lights_physical_pars_fragment:uu,lights_fragment_begin:fu,lights_fragment_maps:pu,lights_fragment_end:mu,logdepthbuf_fragment:gu,logdepthbuf_pars_fragment:_u,logdepthbuf_pars_vertex:vu,logdepthbuf_vertex:xu,map_fragment:yu,map_pars_fragment:Mu,map_particle_fragment:Su,map_particle_pars_fragment:bu,metalnessmap_fragment:wu,metalnessmap_pars_fragment:Tu,morphinstance_vertex:Eu,morphcolor_vertex:Au,morphnormal_vertex:Ru,morphtarget_pars_vertex:Cu,morphtarget_vertex:Pu,normal_fragment_begin:Lu,normal_fragment_maps:Iu,normal_pars_fragment:Du,normal_pars_vertex:Uu,normal_vertex:ku,normalmap_pars_fragment:Nu,clearcoat_normal_fragment_begin:Fu,clearcoat_normal_fragment_maps:Ou,clearcoat_pars_fragment:Bu,iridescence_pars_fragment:zu,opaque_fragment:Vu,packing:Hu,premultiplied_alpha_fragment:Gu,project_vertex:Wu,dithering_fragment:Xu,dithering_pars_fragment:qu,roughnessmap_fragment:Yu,roughnessmap_pars_fragment:ju,shadowmap_pars_fragment:Ku,shadowmap_pars_vertex:$u,shadowmap_vertex:Zu,shadowmask_pars_fragment:Ju,skinbase_vertex:Qu,skinning_pars_vertex:tf,skinning_vertex:ef,skinnormal_vertex:nf,specularmap_fragment:sf,specularmap_pars_fragment:rf,tonemapping_fragment:af,tonemapping_pars_fragment:of,transmission_fragment:lf,transmission_pars_fragment:cf,uv_pars_fragment:hf,uv_pars_vertex:df,uv_vertex:uf,worldpos_vertex:ff,background_vert:pf,background_frag:mf,backgroundCube_vert:gf,backgroundCube_frag:_f,cube_vert:vf,cube_frag:xf,depth_vert:yf,depth_frag:Mf,distanceRGBA_vert:Sf,distanceRGBA_frag:bf,equirect_vert:wf,equirect_frag:Tf,linedashed_vert:Ef,linedashed_frag:Af,meshbasic_vert:Rf,meshbasic_frag:Cf,meshlambert_vert:Pf,meshlambert_frag:Lf,meshmatcap_vert:If,meshmatcap_frag:Df,meshnormal_vert:Uf,meshnormal_frag:kf,meshphong_vert:Nf,meshphong_frag:Ff,meshphysical_vert:Of,meshphysical_frag:Bf,meshtoon_vert:zf,meshtoon_frag:Vf,points_vert:Hf,points_frag:Gf,shadow_vert:Wf,shadow_frag:Xf,sprite_vert:qf,sprite_frag:Yf},nt={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new It}},envmap:{envMap:{value:null},envMapRotation:{value:new It},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new It}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new It}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new It},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new It},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new It},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new It}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new It}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new It}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0},uvTransform:{value:new It}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new It},alphaMap:{value:null},alphaMapTransform:{value:new It},alphaTest:{value:0}}},Ze={basic:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:Re([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:Re([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:Re([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Rt(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:Re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:Re([nt.points,nt.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:Re([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:Re([nt.common,nt.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:Re([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:Re([nt.sprite,nt.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new It},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new It}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:Re([nt.common,nt.displacementmap,{referencePosition:{value:new T},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:Re([nt.lights,nt.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};Ze.physical={uniforms:Re([Ze.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new It},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new It},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new It},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new It},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new It},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new It},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new It},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new It},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new It},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new It},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new It},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new It}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const vs={r:0,b:0,g:0},Bn=new je,jf=new Ot;function Kf(i,t,e,n,s,r,a){const o=new Rt(0);let l=r===!0?0:1,c,h,d=null,u=0,f=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function _(v){let y=!1;const w=g(v);w===null?m(o,l):w&&w.isColor&&(m(w,1),y=!0);const D=i.xr.getEnvironmentBlendMode();D==="additive"?n.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function p(v,y){const w=g(y);w&&(w.isCubeTexture||w.mapping===Xs)?(h===void 0&&(h=new pt(new Et(1,1,1),new Cn({name:"BackgroundCubeMaterial",uniforms:Ci(Ze.backgroundCube.uniforms),vertexShader:Ze.backgroundCube.vertexShader,fragmentShader:Ze.backgroundCube.fragmentShader,side:Ie,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(D,E,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bn.copy(y.backgroundRotation),Bn.x*=-1,Bn.y*=-1,Bn.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Bn.y*=-1,Bn.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(jf.makeRotationFromEuler(Bn)),h.material.toneMapped=Jt.getTransfer(w.colorSpace)!==se,(d!==w||u!==w.version||f!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,u=w.version,f=i.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new pt(new Kn(2,2),new Cn({name:"BackgroundMaterial",uniforms:Ci(Ze.background.uniforms),vertexShader:Ze.background.vertexShader,fragmentShader:Ze.background.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Jt.getTransfer(w.colorSpace)!==se,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||u!==w.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,u=w.version,f=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(vs,ql(i)),n.buffers.color.setClear(vs.r,vs.g,vs.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(v,y=1){o.set(v),l=y,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(o,l)},render:_,addToRenderList:p}}function $f(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null);let r=s,a=!1;function o(x,P,B,F,V){let q=!1;const H=d(F,B,P);r!==H&&(r=H,c(r.object)),q=f(x,F,B,V),q&&g(x,F,B,V),V!==null&&t.update(V,i.ELEMENT_ARRAY_BUFFER),(q||a)&&(a=!1,w(x,P,B,F),V!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(V).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,P,B){const F=B.wireframe===!0;let V=n[x.id];V===void 0&&(V={},n[x.id]=V);let q=V[P.id];q===void 0&&(q={},V[P.id]=q);let H=q[F];return H===void 0&&(H=u(l()),q[F]=H),H}function u(x){const P=[],B=[],F=[];for(let V=0;V<e;V++)P[V]=0,B[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:B,attributeDivisors:F,object:x,attributes:{},index:null}}function f(x,P,B,F){const V=r.attributes,q=P.attributes;let H=0;const Z=B.getAttributes();for(const G in Z)if(Z[G].location>=0){const lt=V[G];let dt=q[G];if(dt===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(dt=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(dt=x.instanceColor)),lt===void 0||lt.attribute!==dt||dt&&lt.data!==dt.data)return!0;H++}return r.attributesNum!==H||r.index!==F}function g(x,P,B,F){const V={},q=P.attributes;let H=0;const Z=B.getAttributes();for(const G in Z)if(Z[G].location>=0){let lt=q[G];lt===void 0&&(G==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),G==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor));const dt={};dt.attribute=lt,lt&&lt.data&&(dt.data=lt.data),V[G]=dt,H++}r.attributes=V,r.attributesNum=H,r.index=F}function _(){const x=r.newAttributes;for(let P=0,B=x.length;P<B;P++)x[P]=0}function p(x){m(x,0)}function m(x,P){const B=r.newAttributes,F=r.enabledAttributes,V=r.attributeDivisors;B[x]=1,F[x]===0&&(i.enableVertexAttribArray(x),F[x]=1),V[x]!==P&&(i.vertexAttribDivisor(x,P),V[x]=P)}function v(){const x=r.newAttributes,P=r.enabledAttributes;for(let B=0,F=P.length;B<F;B++)P[B]!==x[B]&&(i.disableVertexAttribArray(B),P[B]=0)}function y(x,P,B,F,V,q,H){H===!0?i.vertexAttribIPointer(x,P,B,V,q):i.vertexAttribPointer(x,P,B,F,V,q)}function w(x,P,B,F){_();const V=F.attributes,q=B.getAttributes(),H=P.defaultAttributeValues;for(const Z in q){const G=q[Z];if(G.location>=0){let it=V[Z];if(it===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),it!==void 0){const lt=it.normalized,dt=it.itemSize,At=t.get(it);if(At===void 0)continue;const Qt=At.buffer,X=At.type,J=At.bytesPerElement,ft=X===i.INT||X===i.UNSIGNED_INT||it.gpuType===Ll;if(it.isInterleavedBufferAttribute){const at=it.data,Nt=at.stride,Dt=it.offset;if(at.isInstancedInterleavedBuffer){for(let Gt=0;Gt<G.locationSize;Gt++)m(G.location+Gt,at.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=at.meshPerAttribute*at.count)}else for(let Gt=0;Gt<G.locationSize;Gt++)p(G.location+Gt);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let Gt=0;Gt<G.locationSize;Gt++)y(G.location+Gt,dt/G.locationSize,X,lt,Nt*J,(Dt+dt/G.locationSize*Gt)*J,ft)}else{if(it.isInstancedBufferAttribute){for(let at=0;at<G.locationSize;at++)m(G.location+at,it.meshPerAttribute);x.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let at=0;at<G.locationSize;at++)p(G.location+at);i.bindBuffer(i.ARRAY_BUFFER,Qt);for(let at=0;at<G.locationSize;at++)y(G.location+at,dt/G.locationSize,X,lt,dt*J,dt/G.locationSize*at*J,ft)}}else if(H!==void 0){const lt=H[Z];if(lt!==void 0)switch(lt.length){case 2:i.vertexAttrib2fv(G.location,lt);break;case 3:i.vertexAttrib3fv(G.location,lt);break;case 4:i.vertexAttrib4fv(G.location,lt);break;default:i.vertexAttrib1fv(G.location,lt)}}}}v()}function D(){C();for(const x in n){const P=n[x];for(const B in P){const F=P[B];for(const V in F)h(F[V].object),delete F[V];delete P[B]}delete n[x]}}function E(x){if(n[x.id]===void 0)return;const P=n[x.id];for(const B in P){const F=P[B];for(const V in F)h(F[V].object),delete F[V];delete P[B]}delete n[x.id]}function R(x){for(const P in n){const B=n[P];if(B[x.id]===void 0)continue;const F=B[x.id];for(const V in F)h(F[V].object),delete F[V];delete B[x.id]}}function C(){b(),a=!0,r!==s&&(r=s,c(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:b,dispose:D,releaseStatesOfGeometry:E,releaseStatesOfProgram:R,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function Zf(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),e.update(h,n,d))}function o(c,h,d){if(d===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let f=0;f<d;f++)this.render(c[f],h[f]);else{u.multiDrawArraysWEBGL(n,c,0,h,0,d);let f=0;for(let g=0;g<d;g++)f+=h[g];e.update(f,n,1)}}function l(c,h,d,u){if(d===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let g=0;g<c.length;g++)a(c[g],h[g],u[g]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,u,0,d);let g=0;for(let _=0;_<d;_++)g+=h[_];for(let _=0;_<u.length;_++)e.update(g,n,u[_])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Jf(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const E=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(E){return!(E!==qe&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(E){const R=E===qs&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==Rn&&n.convert(E)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Qe&&!R)}function l(E){if(E==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=e.logarithmicDepthBuffer===!0,u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_TEXTURE_SIZE),_=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),v=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=f>0,D=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,maxTextures:u,maxVertexTextures:f,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:m,maxVaryings:v,maxFragmentUniforms:y,vertexTextures:w,maxSamples:D}}function Qf(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Hn,o=new It,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){const f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){const g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{const v=r?0:n,y=v*4;let w=m.clippingState||null;l.value=w,w=h(g,u,y,f);for(let D=0;D!==y;++D)w[D]=e[D];m.clippingState=w,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,g){const _=d!==null?d.length:0;let p=null;if(_!==0){if(p=l.value,g!==!0||p===null){const m=f+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let y=0,w=f;y!==_;++y,w+=4)a.copy(d[y]).applyMatrix4(v,o),a.normal.toArray(p,w),p[w+3]=a.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function tp(i){let t=new WeakMap;function e(a,o){return o===Yr?a.mapping=bi:o===jr&&(a.mapping=wi),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Yr||o===jr)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new hd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class $l extends Yl{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const xi=4,To=[.125,.215,.35,.446,.526,.582],Xn=20,Rr=new $l,Eo=new Rt;let Cr=null,Pr=0,Lr=0,Ir=!1;const Gn=(1+Math.sqrt(5))/2,fi=1/Gn,Ao=[new T(-Gn,fi,0),new T(Gn,fi,0),new T(-fi,0,Gn),new T(fi,0,Gn),new T(0,Gn,-fi),new T(0,Gn,fi),new T(-1,1,-1),new T(1,1,-1),new T(-1,1,1),new T(1,1,1)];class Ro{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lo(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Po(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Cr,Pr,Lr),this._renderer.xr.enabled=Ir,t.scissorTest=!1,xs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===bi||t.mapping===wi?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Cr=this._renderer.getRenderTarget(),Pr=this._renderer.getActiveCubeFace(),Lr=this._renderer.getActiveMipmapLevel(),Ir=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:We,minFilter:We,generateMipmaps:!1,type:qs,format:qe,colorSpace:Pn,depthBuffer:!1},s=Co(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Co(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ep(r)),this._blurMaterial=np(r,t,e)}return s}_compileMaterial(t){const e=new pt(this._lodPlanes[0],t);this._renderer.compile(e,Rr)}_sceneToCubeUV(t,e,n,s){const o=new Le(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,u=h.toneMapping;h.getClearColor(Eo),h.toneMapping=En,h.autoClear=!1;const f=new Pi({name:"PMREM.Background",side:Ie,depthWrite:!1,depthTest:!1}),g=new pt(new Et,f);let _=!1;const p=t.background;p?p.isColor&&(f.color.copy(p),t.background=null,_=!0):(f.color.copy(Eo),_=!0);for(let m=0;m<6;m++){const v=m%3;v===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):v===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const y=this._cubeSize;xs(s,v*y,m>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=u,h.autoClear=d,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===bi||t.mapping===wi;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lo()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Po());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new pt(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;xs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Rr)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ao[(s-r-1)%Ao.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new pt(this._lodPlanes[s],c),u=c.uniforms,f=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*Xn-1),_=r/g,p=isFinite(r)?1+Math.floor(h*_):Xn;p>Xn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Xn}`);const m=[];let v=0;for(let R=0;R<Xn;++R){const C=R/_,b=Math.exp(-C*C/2);m.push(b),R===0?v+=b:R<p&&(v+=2*b)}for(let R=0;R<m.length;R++)m[R]=m[R]/v;u.envMap.value=t.texture,u.samples.value=p,u.weights.value=m,u.latitudinal.value=a==="latitudinal",o&&(u.poleAxis.value=o);const{_lodMax:y}=this;u.dTheta.value=g,u.mipInt.value=y-n;const w=this._sizeLods[s],D=3*w*(s>y-xi?s-y+xi:0),E=4*(this._cubeSize-w);xs(e,D,E,3*w,2*w),l.setRenderTarget(e),l.render(d,Rr)}}function ep(i){const t=[],e=[],n=[];let s=i;const r=i-xi+1+To.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-xi?l=To[a-i+xi-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,d=1+c,u=[h,h,d,h,d,d,h,h,d,d,h,d],f=6,g=6,_=3,p=2,m=1,v=new Float32Array(_*g*f),y=new Float32Array(p*g*f),w=new Float32Array(m*g*f);for(let E=0;E<f;E++){const R=E%3*2/3-1,C=E>2?0:-1,b=[R,C,0,R+2/3,C,0,R+2/3,C+1,0,R,C,0,R+2/3,C+1,0,R,C+1,0];v.set(b,_*g*E),y.set(u,p*g*E);const x=[E,E,E,E,E,E];w.set(x,m*g*E)}const D=new Fe;D.setAttribute("position",new De(v,_)),D.setAttribute("uv",new De(y,p)),D.setAttribute("faceIndex",new De(w,m)),t.push(D),s>xi&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Co(i,t,e){const n=new jn(i,t,e);return n.texture.mapping=Xs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function xs(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function np(i,t,e){const n=new Float32Array(Xn),s=new T(0,1,0);return new Cn({name:"SphericalGaussianBlur",defines:{n:Xn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Po(){return new Cn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Lo(){return new Cn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ha(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function ha(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function ip(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Yr||l===jr,h=l===bi||l===wi;if(c||h){let d=t.get(o);const u=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==u)return e===null&&(e=new Ro(i)),d=c?e.fromEquirectangular(o,d):e.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),d.texture;if(d!==void 0)return d.texture;{const f=o.image;return c&&f&&f.height>0||h&&f&&s(f)?(e===null&&(e=new Ro(i)),d=c?e.fromEquirectangular(o):e.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,t.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function sp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&la("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function rp(i,t,e,n){const s={},r=new WeakMap;function a(d){const u=d.target;u.index!==null&&t.remove(u.index);for(const g in u.attributes)t.remove(u.attributes[g]);for(const g in u.morphAttributes){const _=u.morphAttributes[g];for(let p=0,m=_.length;p<m;p++)t.remove(_[p])}u.removeEventListener("dispose",a),delete s[u.id];const f=r.get(u);f&&(t.remove(f),r.delete(u)),n.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){const u=d.attributes;for(const g in u)t.update(u[g],i.ARRAY_BUFFER);const f=d.morphAttributes;for(const g in f){const _=f[g];for(let p=0,m=_.length;p<m;p++)t.update(_[p],i.ARRAY_BUFFER)}}function c(d){const u=[],f=d.index,g=d.attributes.position;let _=0;if(f!==null){const v=f.array;_=f.version;for(let y=0,w=v.length;y<w;y+=3){const D=v[y+0],E=v[y+1],R=v[y+2];u.push(D,E,E,R,R,D)}}else if(g!==void 0){const v=g.array;_=g.version;for(let y=0,w=v.length/3-1;y<w;y+=3){const D=y+0,E=y+1,R=y+2;u.push(D,E,E,R,R,D)}}else return;const p=new(Bl(u)?Xl:Wl)(u,1);p.version=_;const m=r.get(d);m&&t.remove(m),r.set(d,p)}function h(d){const u=r.get(d);if(u){const f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function ap(i,t,e){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),e.update(f,n,1)}function c(u,f,g){g!==0&&(i.drawElementsInstanced(n,f,r,u*a,g),e.update(f,n,g))}function h(u,f,g){if(g===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<g;p++)this.render(u[p]/a,f[p]);else{_.multiDrawElementsWEBGL(n,f,0,r,u,0,g);let p=0;for(let m=0;m<g;m++)p+=f[m];e.update(p,n,1)}}function d(u,f,g,_){if(g===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<u.length;m++)c(u[m]/a,f[m],_[m]);else{p.multiDrawElementsInstancedWEBGL(n,f,0,r,u,0,_,0,g);let m=0;for(let v=0;v<g;v++)m+=f[v];for(let v=0;v<_.length;v++)e.update(m,n,_[v])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function op(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function lp(i,t,e){const n=new WeakMap,s=new ne;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let u=n.get(o);if(u===void 0||u.count!==d){let b=function(){R.dispose(),n.delete(o),o.removeEventListener("dispose",b)};u!==void 0&&u.texture.dispose();const f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;f===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let w=o.attributes.position.count*y,D=1;w>t.maxTextureSize&&(D=Math.ceil(w/t.maxTextureSize),w=t.maxTextureSize);const E=new Float32Array(w*D*4*d),R=new Vl(E,w,D,d);R.type=Qe,R.needsUpdate=!0;const C=y*4;for(let x=0;x<d;x++){const P=p[x],B=m[x],F=v[x],V=w*D*4*x;for(let q=0;q<P.count;q++){const H=q*C;f===!0&&(s.fromBufferAttribute(P,q),E[V+H+0]=s.x,E[V+H+1]=s.y,E[V+H+2]=s.z,E[V+H+3]=0),g===!0&&(s.fromBufferAttribute(B,q),E[V+H+4]=s.x,E[V+H+5]=s.y,E[V+H+6]=s.z,E[V+H+7]=0),_===!0&&(s.fromBufferAttribute(F,q),E[V+H+8]=s.x,E[V+H+9]=s.y,E[V+H+10]=s.z,E[V+H+11]=F.itemSize===4?s.w:1)}}u={count:d,texture:R,size:new Ct(w,D)},n.set(o,u),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];const g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function cp(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,d=t.get(l,h);if(s.get(d)!==c&&(t.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==c&&(u.update(),s.set(u,c))}return d}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Zl extends Se{constructor(t,e,n,s,r,a,o,l,c,h=Mi){if(h!==Mi&&h!==Ai)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Mi&&(n=Ti),n===void 0&&h===Ai&&(n=Ei),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Ce,this.minFilter=l!==void 0?l:Ce,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Jl=new Se,Ql=new Zl(1,1);Ql.compareFunction=Ol;const tc=new Vl,ec=new jh,nc=new jl,Io=[],Do=[],Uo=new Float32Array(16),ko=new Float32Array(9),No=new Float32Array(4);function Li(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Io[s];if(r===void 0&&(r=new Float32Array(s),Io[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function me(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ks(i,t){let e=Do[t];e===void 0&&(e=new Int32Array(t),Do[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function hp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2fv(this.addr,t),ge(e,t)}}function up(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(me(e,t))return;i.uniform3fv(this.addr,t),ge(e,t)}}function fp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4fv(this.addr,t),ge(e,t)}}function pp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;No.set(n),i.uniformMatrix2fv(this.addr,!1,No),ge(e,n)}}function mp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;ko.set(n),i.uniformMatrix3fv(this.addr,!1,ko),ge(e,n)}}function gp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(me(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ge(e,t)}else{if(me(e,n))return;Uo.set(n),i.uniformMatrix4fv(this.addr,!1,Uo),ge(e,n)}}function _p(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function vp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2iv(this.addr,t),ge(e,t)}}function xp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3iv(this.addr,t),ge(e,t)}}function yp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4iv(this.addr,t),ge(e,t)}}function Mp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Sp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(me(e,t))return;i.uniform2uiv(this.addr,t),ge(e,t)}}function bp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(me(e,t))return;i.uniform3uiv(this.addr,t),ge(e,t)}}function wp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(me(e,t))return;i.uniform4uiv(this.addr,t),ge(e,t)}}function Tp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);const r=this.type===i.SAMPLER_2D_SHADOW?Ql:Jl;e.setTexture2D(t||r,s)}function Ep(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||ec,s)}function Ap(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||nc,s)}function Rp(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||tc,s)}function Cp(i){switch(i){case 5126:return hp;case 35664:return dp;case 35665:return up;case 35666:return fp;case 35674:return pp;case 35675:return mp;case 35676:return gp;case 5124:case 35670:return _p;case 35667:case 35671:return vp;case 35668:case 35672:return xp;case 35669:case 35673:return yp;case 5125:return Mp;case 36294:return Sp;case 36295:return bp;case 36296:return wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Tp;case 35679:case 36299:case 36307:return Ep;case 35680:case 36300:case 36308:case 36293:return Ap;case 36289:case 36303:case 36311:case 36292:return Rp}}function Pp(i,t){i.uniform1fv(this.addr,t)}function Lp(i,t){const e=Li(t,this.size,2);i.uniform2fv(this.addr,e)}function Ip(i,t){const e=Li(t,this.size,3);i.uniform3fv(this.addr,e)}function Dp(i,t){const e=Li(t,this.size,4);i.uniform4fv(this.addr,e)}function Up(i,t){const e=Li(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function kp(i,t){const e=Li(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Np(i,t){const e=Li(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Fp(i,t){i.uniform1iv(this.addr,t)}function Op(i,t){i.uniform2iv(this.addr,t)}function Bp(i,t){i.uniform3iv(this.addr,t)}function zp(i,t){i.uniform4iv(this.addr,t)}function Vp(i,t){i.uniform1uiv(this.addr,t)}function Hp(i,t){i.uniform2uiv(this.addr,t)}function Gp(i,t){i.uniform3uiv(this.addr,t)}function Wp(i,t){i.uniform4uiv(this.addr,t)}function Xp(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Jl,r[a])}function qp(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||ec,r[a])}function Yp(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||nc,r[a])}function jp(i,t,e){const n=this.cache,s=t.length,r=Ks(e,s);me(n,r)||(i.uniform1iv(this.addr,r),ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||tc,r[a])}function Kp(i){switch(i){case 5126:return Pp;case 35664:return Lp;case 35665:return Ip;case 35666:return Dp;case 35674:return Up;case 35675:return kp;case 35676:return Np;case 5124:case 35670:return Fp;case 35667:case 35671:return Op;case 35668:case 35672:return Bp;case 35669:case 35673:return zp;case 5125:return Vp;case 36294:return Hp;case 36295:return Gp;case 36296:return Wp;case 35678:case 36198:case 36298:case 36306:case 35682:return Xp;case 35679:case 36299:case 36307:return qp;case 35680:case 36300:case 36308:case 36293:return Yp;case 36289:case 36303:case 36311:case 36292:return jp}}class $p{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Cp(e.type)}}class Zp{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Kp(e.type)}}class Jp{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Dr=/(\w+)(\])?(\[|\.)?/g;function Fo(i,t){i.seq.push(t),i.map[t.id]=t}function Qp(i,t,e){const n=i.name,s=n.length;for(Dr.lastIndex=0;;){const r=Dr.exec(n),a=Dr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Fo(e,c===void 0?new $p(o,i,t):new Zp(o,i,t));break}else{let d=e.map[o];d===void 0&&(d=new Jp(o),Fo(e,d)),e=d}}}class Cs{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Qp(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Oo(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const tm=37297;let em=0;function nm(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}function im(i){const t=Jt.getPrimaries(Jt.workingColorSpace),e=Jt.getPrimaries(i);let n;switch(t===e?n="":t===Fs&&e===Ns?n="LinearDisplayP3ToLinearSRGB":t===Ns&&e===Fs&&(n="LinearSRGBToLinearDisplayP3"),i){case Pn:case Ys:return[n,"LinearTransferOETF"];case ze:case aa:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Bo(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+nm(i.getShaderSource(t),a)}else return s}function sm(i,t){const e=im(t);return`vec4 ${i}( vec4 value ) { return ${e[0]}( ${e[1]}( value ) ); }`}function rm(i,t){let e;switch(t){case Yc:e="Linear";break;case jc:e="Reinhard";break;case Kc:e="OptimizedCineon";break;case $c:e="ACESFilmic";break;case Jc:e="AgX";break;case Qc:e="Neutral";break;case Zc:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function am(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gi).join(`
`)}function om(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function lm(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Gi(i){return i!==""}function zo(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Vo(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cm=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jr(i){return i.replace(cm,dm)}const hm=new Map;function dm(i,t){let e=Lt[t];if(e===void 0){const n=hm.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jr(e)}const um=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ho(i){return i.replace(um,fm)}function fm(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Go(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function pm(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===na?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===xc?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===hn&&(t="SHADOWMAP_TYPE_VSM"),t}function mm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case bi:case wi:t="ENVMAP_TYPE_CUBE";break;case Xs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gm(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case wi:t="ENVMAP_MODE_REFRACTION";break}return t}function _m(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ia:t="ENVMAP_BLENDING_MULTIPLY";break;case Xc:t="ENVMAP_BLENDING_MIX";break;case qc:t="ENVMAP_BLENDING_ADD";break}return t}function vm(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function xm(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=pm(e),c=mm(e),h=gm(e),d=_m(e),u=vm(e),f=am(e),g=om(r),_=s.createProgram();let p,m,v=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gi).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Gi).join(`
`),m.length>0&&(m+=`
`)):(p=[Go(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gi).join(`
`),m=[Go(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==En?"#define TONE_MAPPING":"",e.toneMapping!==En?Lt.tonemapping_pars_fragment:"",e.toneMapping!==En?rm("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,sm("linearToOutputTexel",e.outputColorSpace),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Gi).join(`
`)),a=Jr(a),a=zo(a,e),a=Vo(a,e),o=Jr(o),o=zo(o,e),o=Vo(o,e),a=Ho(a),o=Ho(o),e.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",e.glslVersion===io?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===io?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const y=v+p+a,w=v+m+o,D=Oo(s,s.VERTEX_SHADER,y),E=Oo(s,s.FRAGMENT_SHADER,w);s.attachShader(_,D),s.attachShader(_,E),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function R(P){if(i.debug.checkShaderErrors){const B=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(D).trim(),V=s.getShaderInfoLog(E).trim();let q=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,D,E);else{const Z=Bo(s,D,"vertex"),G=Bo(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+B+`
`+Z+`
`+G)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||V==="")&&(H=!1);H&&(P.diagnostics={runnable:q,programLog:B,vertexShader:{log:F,prefix:p},fragmentShader:{log:V,prefix:m}})}s.deleteShader(D),s.deleteShader(E),C=new Cs(s,_),b=lm(s,_)}let C;this.getUniforms=function(){return C===void 0&&R(this),C};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,tm)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=em++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=E,this}let ym=0;class Mm{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Sm(t),e.set(t,n)),n}}class Sm{constructor(t){this.id=ym++,this.code=t,this.usedTimes=0}}function bm(i,t,e,n,s,r,a){const o=new Hl,l=new Mm,c=new Set,h=[],d=s.logarithmicDepthBuffer,u=s.vertexTextures;let f=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return c.add(b),b===0?"uv":`uv${b}`}function p(b,x,P,B,F){const V=B.fog,q=F.geometry,H=b.isMeshStandardMaterial?B.environment:null,Z=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),G=Z&&Z.mapping===Xs?Z.image.height:null,it=g[b.type];b.precision!==null&&(f=s.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const lt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,dt=lt!==void 0?lt.length:0;let At=0;q.morphAttributes.position!==void 0&&(At=1),q.morphAttributes.normal!==void 0&&(At=2),q.morphAttributes.color!==void 0&&(At=3);let Qt,X,J,ft;if(it){const te=Ze[it];Qt=te.vertexShader,X=te.fragmentShader}else Qt=b.vertexShader,X=b.fragmentShader,l.update(b),J=l.getVertexShaderID(b),ft=l.getFragmentShaderID(b);const at=i.getRenderTarget(),Nt=F.isInstancedMesh===!0,Dt=F.isBatchedMesh===!0,Gt=!!b.map,I=!!b.matcap,Ht=!!Z,zt=!!b.aoMap,re=!!b.lightMap,yt=!!b.bumpMap,qt=!!b.normalMap,Ft=!!b.displacementMap,Pt=!!b.emissiveMap,ue=!!b.metalnessMap,A=!!b.roughnessMap,M=b.anisotropy>0,z=b.clearcoat>0,j=b.dispersion>0,K=b.iridescence>0,$=b.sheen>0,vt=b.transmission>0,st=M&&!!b.anisotropyMap,rt=z&&!!b.clearcoatMap,Ut=z&&!!b.clearcoatNormalMap,Q=z&&!!b.clearcoatRoughnessMap,gt=K&&!!b.iridescenceMap,Bt=K&&!!b.iridescenceThicknessMap,wt=$&&!!b.sheenColorMap,ot=$&&!!b.sheenRoughnessMap,kt=!!b.specularMap,Vt=!!b.specularColorMap,he=!!b.specularIntensityMap,L=vt&&!!b.transmissionMap,ct=vt&&!!b.thicknessMap,W=!!b.gradientMap,Y=!!b.alphaMap,et=b.alphaTest>0,Tt=!!b.alphaHash,Yt=!!b.extensions;let de=En;b.toneMapped&&(at===null||at.isXRRenderTarget===!0)&&(de=i.toneMapping);const _e={shaderID:it,shaderType:b.type,shaderName:b.name,vertexShader:Qt,fragmentShader:X,defines:b.defines,customVertexShaderID:J,customFragmentShaderID:ft,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:Dt,batchingColor:Dt&&F._colorsTexture!==null,instancing:Nt,instancingColor:Nt&&F.instanceColor!==null,instancingMorph:Nt&&F.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:at===null?i.outputColorSpace:at.isXRRenderTarget===!0?at.texture.colorSpace:Pn,alphaToCoverage:!!b.alphaToCoverage,map:Gt,matcap:I,envMap:Ht,envMapMode:Ht&&Z.mapping,envMapCubeUVHeight:G,aoMap:zt,lightMap:re,bumpMap:yt,normalMap:qt,displacementMap:u&&Ft,emissiveMap:Pt,normalMapObjectSpace:qt&&b.normalMapType===_h,normalMapTangentSpace:qt&&b.normalMapType===ra,metalnessMap:ue,roughnessMap:A,anisotropy:M,anisotropyMap:st,clearcoat:z,clearcoatMap:rt,clearcoatNormalMap:Ut,clearcoatRoughnessMap:Q,dispersion:j,iridescence:K,iridescenceMap:gt,iridescenceThicknessMap:Bt,sheen:$,sheenColorMap:wt,sheenRoughnessMap:ot,specularMap:kt,specularColorMap:Vt,specularIntensityMap:he,transmission:vt,transmissionMap:L,thicknessMap:ct,gradientMap:W,opaque:b.transparent===!1&&b.blending===yi&&b.alphaToCoverage===!1,alphaMap:Y,alphaTest:et,alphaHash:Tt,combine:b.combine,mapUv:Gt&&_(b.map.channel),aoMapUv:zt&&_(b.aoMap.channel),lightMapUv:re&&_(b.lightMap.channel),bumpMapUv:yt&&_(b.bumpMap.channel),normalMapUv:qt&&_(b.normalMap.channel),displacementMapUv:Ft&&_(b.displacementMap.channel),emissiveMapUv:Pt&&_(b.emissiveMap.channel),metalnessMapUv:ue&&_(b.metalnessMap.channel),roughnessMapUv:A&&_(b.roughnessMap.channel),anisotropyMapUv:st&&_(b.anisotropyMap.channel),clearcoatMapUv:rt&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Ut&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:Bt&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:wt&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:ot&&_(b.sheenRoughnessMap.channel),specularMapUv:kt&&_(b.specularMap.channel),specularColorMapUv:Vt&&_(b.specularColorMap.channel),specularIntensityMapUv:he&&_(b.specularIntensityMap.channel),transmissionMapUv:L&&_(b.transmissionMap.channel),thicknessMapUv:ct&&_(b.thicknessMap.channel),alphaMapUv:Y&&_(b.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(qt||M),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!q.attributes.uv&&(Gt||Y),fog:!!V,useFog:b.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:F.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:dt,morphTextureStride:At,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:de,decodeVideoTexture:Gt&&b.map.isVideoTexture===!0&&Jt.getTransfer(b.map.colorSpace)===se,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===dn,flipSided:b.side===Ie,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Yt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:Yt&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function m(b){const x=[];if(b.shaderID?x.push(b.shaderID):(x.push(b.customVertexShaderID),x.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)x.push(P),x.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(v(x,b),y(x,b),x.push(i.outputColorSpace)),x.push(b.customProgramCacheKey),x.join()}function v(b,x){b.push(x.precision),b.push(x.outputColorSpace),b.push(x.envMapMode),b.push(x.envMapCubeUVHeight),b.push(x.mapUv),b.push(x.alphaMapUv),b.push(x.lightMapUv),b.push(x.aoMapUv),b.push(x.bumpMapUv),b.push(x.normalMapUv),b.push(x.displacementMapUv),b.push(x.emissiveMapUv),b.push(x.metalnessMapUv),b.push(x.roughnessMapUv),b.push(x.anisotropyMapUv),b.push(x.clearcoatMapUv),b.push(x.clearcoatNormalMapUv),b.push(x.clearcoatRoughnessMapUv),b.push(x.iridescenceMapUv),b.push(x.iridescenceThicknessMapUv),b.push(x.sheenColorMapUv),b.push(x.sheenRoughnessMapUv),b.push(x.specularMapUv),b.push(x.specularColorMapUv),b.push(x.specularIntensityMapUv),b.push(x.transmissionMapUv),b.push(x.thicknessMapUv),b.push(x.combine),b.push(x.fogExp2),b.push(x.sizeAttenuation),b.push(x.morphTargetsCount),b.push(x.morphAttributeCount),b.push(x.numDirLights),b.push(x.numPointLights),b.push(x.numSpotLights),b.push(x.numSpotLightMaps),b.push(x.numHemiLights),b.push(x.numRectAreaLights),b.push(x.numDirLightShadows),b.push(x.numPointLightShadows),b.push(x.numSpotLightShadows),b.push(x.numSpotLightShadowsWithMaps),b.push(x.numLightProbes),b.push(x.shadowMapType),b.push(x.toneMapping),b.push(x.numClippingPlanes),b.push(x.numClipIntersection),b.push(x.depthPacking)}function y(b,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.skinning&&o.enable(4),x.morphTargets&&o.enable(5),x.morphNormals&&o.enable(6),x.morphColors&&o.enable(7),x.premultipliedAlpha&&o.enable(8),x.shadowMapEnabled&&o.enable(9),x.doubleSided&&o.enable(10),x.flipSided&&o.enable(11),x.useDepthPacking&&o.enable(12),x.dithering&&o.enable(13),x.transmission&&o.enable(14),x.sheen&&o.enable(15),x.opaque&&o.enable(16),x.pointsUvs&&o.enable(17),x.decodeVideoTexture&&o.enable(18),x.alphaToCoverage&&o.enable(19),b.push(o.mask)}function w(b){const x=g[b.type];let P;if(x){const B=Ze[x];P=ad.clone(B.uniforms)}else P=b.uniforms;return P}function D(b,x){let P;for(let B=0,F=h.length;B<F;B++){const V=h[B];if(V.cacheKey===x){P=V,++P.usedTimes;break}}return P===void 0&&(P=new xm(i,x,b,r),h.push(P)),P}function E(b){if(--b.usedTimes===0){const x=h.indexOf(b);h[x]=h[h.length-1],h.pop(),b.destroy()}}function R(b){l.remove(b)}function C(){l.dispose()}return{getParameters:p,getProgramCacheKey:m,getUniforms:w,acquireProgram:D,releaseProgram:E,releaseShaderCache:R,programs:h,dispose:C}}function wm(){let i=new WeakMap;function t(r){let a=i.get(r);return a===void 0&&(a={},i.set(r,a)),a}function e(r){i.delete(r)}function n(r,a,o){i.get(r)[a]=o}function s(){i=new WeakMap}return{get:t,remove:e,update:n,dispose:s}}function Tm(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Wo(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Xo(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(d,u,f,g,_,p){let m=i[t];return m===void 0?(m={id:d.id,object:d,geometry:u,material:f,groupOrder:g,renderOrder:d.renderOrder,z:_,group:p},i[t]=m):(m.id=d.id,m.object=d,m.geometry=u,m.material=f,m.groupOrder=g,m.renderOrder=d.renderOrder,m.z=_,m.group=p),t++,m}function o(d,u,f,g,_,p){const m=a(d,u,f,g,_,p);f.transmission>0?n.push(m):f.transparent===!0?s.push(m):e.push(m)}function l(d,u,f,g,_,p){const m=a(d,u,f,g,_,p);f.transmission>0?n.unshift(m):f.transparent===!0?s.unshift(m):e.unshift(m)}function c(d,u){e.length>1&&e.sort(d||Tm),n.length>1&&n.sort(u||Wo),s.length>1&&s.sort(u||Wo)}function h(){for(let d=t,u=i.length;d<u;d++){const f=i[d];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function Em(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Xo,i.set(n,[a])):s>=r.length?(a=new Xo,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Am(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new T,color:new Rt};break;case"SpotLight":e={position:new T,direction:new T,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new T,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new T,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":e={color:new Rt,position:new T,halfWidth:new T,halfHeight:new T};break}return i[t.id]=e,e}}}function Rm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Cm=0;function Pm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Lm(i){const t=new Am,e=Rm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new T);const s=new T,r=new Ot,a=new Ot;function o(c){let h=0,d=0,u=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,v=0,y=0,w=0,D=0,E=0,R=0;c.sort(Pm);for(let b=0,x=c.length;b<x;b++){const P=c[b],B=P.color,F=P.intensity,V=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=B.r*F,d+=B.g*F,u+=B.b*F;else if(P.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(P.sh.coefficients[H],F);R++}else if(P.isDirectionalLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Z=P.shadow,G=e.get(P);G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=q,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=H,f++}else if(P.isSpotLight){const H=t.get(P);H.position.setFromMatrixPosition(P.matrixWorld),H.color.copy(B).multiplyScalar(F),H.distance=V,H.coneCos=Math.cos(P.angle),H.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),H.decay=P.decay,n.spot[_]=H;const Z=P.shadow;if(P.map&&(n.spotLightMap[D]=P.map,D++,Z.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[_]=Z.matrix,P.castShadow){const G=e.get(P);G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,n.spotShadow[_]=G,n.spotShadowMap[_]=q,w++}_++}else if(P.isRectAreaLight){const H=t.get(P);H.color.copy(B).multiplyScalar(F),H.halfWidth.set(P.width*.5,0,0),H.halfHeight.set(0,P.height*.5,0),n.rectArea[p]=H,p++}else if(P.isPointLight){const H=t.get(P);if(H.color.copy(P.color).multiplyScalar(P.intensity),H.distance=P.distance,H.decay=P.decay,P.castShadow){const Z=P.shadow,G=e.get(P);G.shadowBias=Z.bias,G.shadowNormalBias=Z.normalBias,G.shadowRadius=Z.radius,G.shadowMapSize=Z.mapSize,G.shadowCameraNear=Z.camera.near,G.shadowCameraFar=Z.camera.far,n.pointShadow[g]=G,n.pointShadowMap[g]=q,n.pointShadowMatrix[g]=P.shadow.matrix,y++}n.point[g]=H,g++}else if(P.isHemisphereLight){const H=t.get(P);H.skyColor.copy(P.color).multiplyScalar(F),H.groundColor.copy(P.groundColor).multiplyScalar(F),n.hemi[m]=H,m++}}p>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;const C=n.hash;(C.directionalLength!==f||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==p||C.hemiLength!==m||C.numDirectionalShadows!==v||C.numPointShadows!==y||C.numSpotShadows!==w||C.numSpotMaps!==D||C.numLightProbes!==R)&&(n.directional.length=f,n.spot.length=_,n.rectArea.length=p,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=w+D-E,n.spotLightMap.length=D,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=R,C.directionalLength=f,C.pointLength=g,C.spotLength=_,C.rectAreaLength=p,C.hemiLength=m,C.numDirectionalShadows=v,C.numPointShadows=y,C.numSpotShadows=w,C.numSpotMaps=D,C.numLightProbes=R,n.version=Cm++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0;const p=h.matrixWorldInverse;for(let m=0,v=c.length;m<v;m++){const y=c[m];if(y.isDirectionalLight){const w=n.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(y.isSpotLight){const w=n.spot[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),f++}else if(y.isRectAreaLight){const w=n.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(y.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const w=n.point[u];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(p),u++}else if(y.isHemisphereLight){const w=n.hemi[_];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(p),_++}}}return{setup:o,setupView:l,state:n}}function qo(i){const t=new Lm(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Im(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new qo(i),t.set(s,[o])):r>=a.length?(o=new qo(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class Dm extends In{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=mh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Um extends In{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const km=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Nm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fm(i,t,e){let n=new ca;const s=new Ct,r=new Ct,a=new ne,o=new Dm({depthPacking:gh}),l=new Um,c={},h=e.maxTextureSize,d={[An]:Ie,[Ie]:An,[dn]:dn},u=new Cn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:km,fragmentShader:Nm}),f=u.clone();f.defines.HORIZONTAL_PASS=1;const g=new Fe;g.setAttribute("position",new De(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new pt(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=na;let m=this.type;this.render=function(E,R,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||E.length===0)return;const b=i.getRenderTarget(),x=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),B=i.state;B.setBlending(Tn),B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);const F=m!==hn&&this.type===hn,V=m===hn&&this.type!==hn;for(let q=0,H=E.length;q<H;q++){const Z=E[q],G=Z.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",Z,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const it=G.getFrameExtents();if(s.multiply(it),r.copy(G.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/it.x),s.x=r.x*it.x,G.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/it.y),s.y=r.y*it.y,G.mapSize.y=r.y)),G.map===null||F===!0||V===!0){const dt=this.type!==hn?{minFilter:Ce,magFilter:Ce}:{};G.map!==null&&G.map.dispose(),G.map=new jn(s.x,s.y,dt),G.map.texture.name=Z.name+".shadowMap",G.camera.updateProjectionMatrix()}i.setRenderTarget(G.map),i.clear();const lt=G.getViewportCount();for(let dt=0;dt<lt;dt++){const At=G.getViewport(dt);a.set(r.x*At.x,r.y*At.y,r.x*At.z,r.y*At.w),B.viewport(a),G.updateMatrices(Z,dt),n=G.getFrustum(),w(R,C,G.camera,Z,this.type)}G.isPointLightShadow!==!0&&this.type===hn&&v(G,C),G.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(b,x,P)};function v(E,R){const C=t.update(_);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new jn(s.x,s.y)),u.uniforms.shadow_pass.value=E.map.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,i.setRenderTarget(E.mapPass),i.clear(),i.renderBufferDirect(R,null,C,u,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,i.setRenderTarget(E.map),i.clear(),i.renderBufferDirect(R,null,C,f,_,null)}function y(E,R,C,b){let x=null;const P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)x=P;else if(x=C.isPointLight===!0?l:o,i.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0){const B=x.uuid,F=R.uuid;let V=c[B];V===void 0&&(V={},c[B]=V);let q=V[F];q===void 0&&(q=x.clone(),V[F]=q,R.addEventListener("dispose",D)),x=q}if(x.visible=R.visible,x.wireframe=R.wireframe,b===hn?x.side=R.shadowSide!==null?R.shadowSide:R.side:x.side=R.shadowSide!==null?R.shadowSide:d[R.side],x.alphaMap=R.alphaMap,x.alphaTest=R.alphaTest,x.map=R.map,x.clipShadows=R.clipShadows,x.clippingPlanes=R.clippingPlanes,x.clipIntersection=R.clipIntersection,x.displacementMap=R.displacementMap,x.displacementScale=R.displacementScale,x.displacementBias=R.displacementBias,x.wireframeLinewidth=R.wireframeLinewidth,x.linewidth=R.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const B=i.properties.get(x);B.light=C}return x}function w(E,R,C,b,x){if(E.visible===!1)return;if(E.layers.test(R.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&x===hn)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const F=t.update(E),V=E.material;if(Array.isArray(V)){const q=F.groups;for(let H=0,Z=q.length;H<Z;H++){const G=q[H],it=V[G.materialIndex];if(it&&it.visible){const lt=y(E,it,b,x);E.onBeforeShadow(i,E,R,C,F,lt,G),i.renderBufferDirect(C,null,F,lt,E,G),E.onAfterShadow(i,E,R,C,F,lt,G)}}}else if(V.visible){const q=y(E,V,b,x);E.onBeforeShadow(i,E,R,C,F,q,null),i.renderBufferDirect(C,null,F,q,E,null),E.onAfterShadow(i,E,R,C,F,q,null)}}const B=E.children;for(let F=0,V=B.length;F<V;F++)w(B[F],R,C,b,x)}function D(E){E.target.removeEventListener("dispose",D);for(const C in c){const b=c[C],x=E.target.uuid;x in b&&(b[x].dispose(),delete b[x])}}}function Om(i){function t(){let L=!1;const ct=new ne;let W=null;const Y=new ne(0,0,0,0);return{setMask:function(et){W!==et&&!L&&(i.colorMask(et,et,et,et),W=et)},setLocked:function(et){L=et},setClear:function(et,Tt,Yt,de,_e){_e===!0&&(et*=de,Tt*=de,Yt*=de),ct.set(et,Tt,Yt,de),Y.equals(ct)===!1&&(i.clearColor(et,Tt,Yt,de),Y.copy(ct))},reset:function(){L=!1,W=null,Y.set(-1,0,0,0)}}}function e(){let L=!1,ct=null,W=null,Y=null;return{setTest:function(et){et?ft(i.DEPTH_TEST):at(i.DEPTH_TEST)},setMask:function(et){ct!==et&&!L&&(i.depthMask(et),ct=et)},setFunc:function(et){if(W!==et){switch(et){case Oc:i.depthFunc(i.NEVER);break;case Bc:i.depthFunc(i.ALWAYS);break;case zc:i.depthFunc(i.LESS);break;case Ps:i.depthFunc(i.LEQUAL);break;case Vc:i.depthFunc(i.EQUAL);break;case Hc:i.depthFunc(i.GEQUAL);break;case Gc:i.depthFunc(i.GREATER);break;case Wc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}W=et}},setLocked:function(et){L=et},setClear:function(et){Y!==et&&(i.clearDepth(et),Y=et)},reset:function(){L=!1,ct=null,W=null,Y=null}}}function n(){let L=!1,ct=null,W=null,Y=null,et=null,Tt=null,Yt=null,de=null,_e=null;return{setTest:function(te){L||(te?ft(i.STENCIL_TEST):at(i.STENCIL_TEST))},setMask:function(te){ct!==te&&!L&&(i.stencilMask(te),ct=te)},setFunc:function(te,Ke,$e){(W!==te||Y!==Ke||et!==$e)&&(i.stencilFunc(te,Ke,$e),W=te,Y=Ke,et=$e)},setOp:function(te,Ke,$e){(Tt!==te||Yt!==Ke||de!==$e)&&(i.stencilOp(te,Ke,$e),Tt=te,Yt=Ke,de=$e)},setLocked:function(te){L=te},setClear:function(te){_e!==te&&(i.clearStencil(te),_e=te)},reset:function(){L=!1,ct=null,W=null,Y=null,et=null,Tt=null,Yt=null,de=null,_e=null}}}const s=new t,r=new e,a=new n,o=new WeakMap,l=new WeakMap;let c={},h={},d=new WeakMap,u=[],f=null,g=!1,_=null,p=null,m=null,v=null,y=null,w=null,D=null,E=new Rt(0,0,0),R=0,C=!1,b=null,x=null,P=null,B=null,F=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,H=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Z)[1]),q=H>=1):Z.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),q=H>=2);let G=null,it={};const lt=i.getParameter(i.SCISSOR_BOX),dt=i.getParameter(i.VIEWPORT),At=new ne().fromArray(lt),Qt=new ne().fromArray(dt);function X(L,ct,W,Y){const et=new Uint8Array(4),Tt=i.createTexture();i.bindTexture(L,Tt),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Yt=0;Yt<W;Yt++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Y,0,i.RGBA,i.UNSIGNED_BYTE,et):i.texImage2D(ct+Yt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,et);return Tt}const J={};J[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),J[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),J[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),ft(i.DEPTH_TEST),r.setFunc(Ps),yt(!1),qt(Ta),ft(i.CULL_FACE),zt(Tn);function ft(L){c[L]!==!0&&(i.enable(L),c[L]=!0)}function at(L){c[L]!==!1&&(i.disable(L),c[L]=!1)}function Nt(L,ct){return h[L]!==ct?(i.bindFramebuffer(L,ct),h[L]=ct,L===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ct),L===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Dt(L,ct){let W=u,Y=!1;if(L){W=d.get(ct),W===void 0&&(W=[],d.set(ct,W));const et=L.textures;if(W.length!==et.length||W[0]!==i.COLOR_ATTACHMENT0){for(let Tt=0,Yt=et.length;Tt<Yt;Tt++)W[Tt]=i.COLOR_ATTACHMENT0+Tt;W.length=et.length,Y=!0}}else W[0]!==i.BACK&&(W[0]=i.BACK,Y=!0);Y&&i.drawBuffers(W)}function Gt(L){return f!==L?(i.useProgram(L),f=L,!0):!1}const I={[Wn]:i.FUNC_ADD,[Mc]:i.FUNC_SUBTRACT,[Sc]:i.FUNC_REVERSE_SUBTRACT};I[bc]=i.MIN,I[wc]=i.MAX;const Ht={[Tc]:i.ZERO,[Ec]:i.ONE,[Ac]:i.SRC_COLOR,[Xr]:i.SRC_ALPHA,[Dc]:i.SRC_ALPHA_SATURATE,[Lc]:i.DST_COLOR,[Cc]:i.DST_ALPHA,[Rc]:i.ONE_MINUS_SRC_COLOR,[qr]:i.ONE_MINUS_SRC_ALPHA,[Ic]:i.ONE_MINUS_DST_COLOR,[Pc]:i.ONE_MINUS_DST_ALPHA,[Uc]:i.CONSTANT_COLOR,[kc]:i.ONE_MINUS_CONSTANT_COLOR,[Nc]:i.CONSTANT_ALPHA,[Fc]:i.ONE_MINUS_CONSTANT_ALPHA};function zt(L,ct,W,Y,et,Tt,Yt,de,_e,te){if(L===Tn){g===!0&&(at(i.BLEND),g=!1);return}if(g===!1&&(ft(i.BLEND),g=!0),L!==yc){if(L!==_||te!==C){if((p!==Wn||y!==Wn)&&(i.blendEquation(i.FUNC_ADD),p=Wn,y=Wn),te)switch(L){case yi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ea:i.blendFunc(i.ONE,i.ONE);break;case Aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ra:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case yi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ea:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Aa:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ra:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}m=null,v=null,w=null,D=null,E.set(0,0,0),R=0,_=L,C=te}return}et=et||ct,Tt=Tt||W,Yt=Yt||Y,(ct!==p||et!==y)&&(i.blendEquationSeparate(I[ct],I[et]),p=ct,y=et),(W!==m||Y!==v||Tt!==w||Yt!==D)&&(i.blendFuncSeparate(Ht[W],Ht[Y],Ht[Tt],Ht[Yt]),m=W,v=Y,w=Tt,D=Yt),(de.equals(E)===!1||_e!==R)&&(i.blendColor(de.r,de.g,de.b,_e),E.copy(de),R=_e),_=L,C=!1}function re(L,ct){L.side===dn?at(i.CULL_FACE):ft(i.CULL_FACE);let W=L.side===Ie;ct&&(W=!W),yt(W),L.blending===yi&&L.transparent===!1?zt(Tn):zt(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),r.setFunc(L.depthFunc),r.setTest(L.depthTest),r.setMask(L.depthWrite),s.setMask(L.colorWrite);const Y=L.stencilWrite;a.setTest(Y),Y&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Pt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ft(i.SAMPLE_ALPHA_TO_COVERAGE):at(i.SAMPLE_ALPHA_TO_COVERAGE)}function yt(L){b!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),b=L)}function qt(L){L!==_c?(ft(i.CULL_FACE),L!==x&&(L===Ta?i.cullFace(i.BACK):L===vc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):at(i.CULL_FACE),x=L}function Ft(L){L!==P&&(q&&i.lineWidth(L),P=L)}function Pt(L,ct,W){L?(ft(i.POLYGON_OFFSET_FILL),(B!==ct||F!==W)&&(i.polygonOffset(ct,W),B=ct,F=W)):at(i.POLYGON_OFFSET_FILL)}function ue(L){L?ft(i.SCISSOR_TEST):at(i.SCISSOR_TEST)}function A(L){L===void 0&&(L=i.TEXTURE0+V-1),G!==L&&(i.activeTexture(L),G=L)}function M(L,ct,W){W===void 0&&(G===null?W=i.TEXTURE0+V-1:W=G);let Y=it[W];Y===void 0&&(Y={type:void 0,texture:void 0},it[W]=Y),(Y.type!==L||Y.texture!==ct)&&(G!==W&&(i.activeTexture(W),G=W),i.bindTexture(L,ct||J[L]),Y.type=L,Y.texture=ct)}function z(){const L=it[G];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function K(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function $(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function st(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function rt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Ut(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Bt(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function wt(L){At.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),At.copy(L))}function ot(L){Qt.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),Qt.copy(L))}function kt(L,ct){let W=l.get(ct);W===void 0&&(W=new WeakMap,l.set(ct,W));let Y=W.get(L);Y===void 0&&(Y=i.getUniformBlockIndex(ct,L.name),W.set(L,Y))}function Vt(L,ct){const Y=l.get(ct).get(L);o.get(ct)!==Y&&(i.uniformBlockBinding(ct,Y,L.__bindingPointIndex),o.set(ct,Y))}function he(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},G=null,it={},h={},d=new WeakMap,u=[],f=null,g=!1,_=null,p=null,m=null,v=null,y=null,w=null,D=null,E=new Rt(0,0,0),R=0,C=!1,b=null,x=null,P=null,B=null,F=null,At.set(0,0,i.canvas.width,i.canvas.height),Qt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:ft,disable:at,bindFramebuffer:Nt,drawBuffers:Dt,useProgram:Gt,setBlending:zt,setMaterial:re,setFlipSided:yt,setCullFace:qt,setLineWidth:Ft,setPolygonOffset:Pt,setScissorTest:ue,activeTexture:A,bindTexture:M,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:K,texImage2D:gt,texImage3D:Bt,updateUBOMapping:kt,uniformBlockBinding:Vt,texStorage2D:Ut,texStorage3D:Q,texSubImage2D:$,texSubImage3D:vt,compressedTexSubImage2D:st,compressedTexSubImage3D:rt,scissor:wt,viewport:ot,reset:he}}function Bm(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap;let d;const u=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,M){return f?new OffscreenCanvas(A,M):Yi("canvas")}function _(A,M,z){let j=1;const K=ue(A);if((K.width>z||K.height>z)&&(j=z/Math.max(K.width,K.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(j*K.width),vt=Math.floor(j*K.height);d===void 0&&(d=g($,vt));const st=M?g($,vt):d;return st.width=$,st.height=vt,st.getContext("2d").drawImage(A,0,0,$,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+$+"x"+vt+")."),st}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Ce&&A.minFilter!==We}function m(A){i.generateMipmap(A)}function v(A,M,z,j,K=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=M;if(M===i.RED&&(z===i.FLOAT&&($=i.R32F),z===i.HALF_FLOAT&&($=i.R16F),z===i.UNSIGNED_BYTE&&($=i.R8)),M===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.R8UI),z===i.UNSIGNED_SHORT&&($=i.R16UI),z===i.UNSIGNED_INT&&($=i.R32UI),z===i.BYTE&&($=i.R8I),z===i.SHORT&&($=i.R16I),z===i.INT&&($=i.R32I)),M===i.RG&&(z===i.FLOAT&&($=i.RG32F),z===i.HALF_FLOAT&&($=i.RG16F),z===i.UNSIGNED_BYTE&&($=i.RG8)),M===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&($=i.RG8UI),z===i.UNSIGNED_SHORT&&($=i.RG16UI),z===i.UNSIGNED_INT&&($=i.RG32UI),z===i.BYTE&&($=i.RG8I),z===i.SHORT&&($=i.RG16I),z===i.INT&&($=i.RG32I)),M===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&($=i.RGB9_E5),M===i.RGBA){const vt=K?ks:Jt.getTransfer(j);z===i.FLOAT&&($=i.RGBA32F),z===i.HALF_FLOAT&&($=i.RGBA16F),z===i.UNSIGNED_BYTE&&($=vt===se?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&($=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&($=i.RGB5_A1)}return($===i.R16F||$===i.R32F||$===i.RG16F||$===i.RG32F||$===i.RGBA16F||$===i.RGBA32F)&&t.get("EXT_color_buffer_float"),$}function y(A,M){let z;return A?M===null||M===Ti||M===Ei?z=i.DEPTH24_STENCIL8:M===Qe?z=i.DEPTH32F_STENCIL8:M===Is&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Ti||M===Ei?z=i.DEPTH_COMPONENT24:M===Qe?z=i.DEPTH_COMPONENT32F:M===Is&&(z=i.DEPTH_COMPONENT16),z}function w(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Ce&&A.minFilter!==We?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function D(A){const M=A.target;M.removeEventListener("dispose",D),R(M),M.isVideoTexture&&h.delete(M)}function E(A){const M=A.target;M.removeEventListener("dispose",E),b(M)}function R(A){const M=n.get(A);if(M.__webglInit===void 0)return;const z=A.source,j=u.get(z);if(j){const K=j[M.__cacheKey];K.usedTimes--,K.usedTimes===0&&C(A),Object.keys(j).length===0&&u.delete(z)}n.remove(A)}function C(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const z=A.source,j=u.get(z);delete j[M.__cacheKey],a.memory.textures--}function b(A){const M=n.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let K=0;K<M.__webglFramebuffer[j].length;K++)i.deleteFramebuffer(M.__webglFramebuffer[j][K]);else i.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)i.deleteFramebuffer(M.__webglFramebuffer[j]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const z=A.textures;for(let j=0,K=z.length;j<K;j++){const $=n.get(z[j]);$.__webglTexture&&(i.deleteTexture($.__webglTexture),a.memory.textures--),n.remove(z[j])}n.remove(A)}let x=0;function P(){x=0}function B(){const A=x;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),x+=1,A}function F(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function V(A,M){const z=n.get(A);if(A.isVideoTexture&&Ft(A),A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Qt(z,A,M);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+M)}function q(A,M){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Qt(z,A,M);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+M)}function H(A,M){const z=n.get(A);if(A.version>0&&z.__version!==A.version){Qt(z,A,M);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+M)}function Z(A,M){const z=n.get(A);if(A.version>0&&z.__version!==A.version){X(z,A,M);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+M)}const G={[Ls]:i.REPEAT,[Yn]:i.CLAMP_TO_EDGE,[Kr]:i.MIRRORED_REPEAT},it={[Ce]:i.NEAREST,[eh]:i.NEAREST_MIPMAP_NEAREST,[Ji]:i.NEAREST_MIPMAP_LINEAR,[We]:i.LINEAR,[ir]:i.LINEAR_MIPMAP_NEAREST,[bn]:i.LINEAR_MIPMAP_LINEAR},lt={[vh]:i.NEVER,[wh]:i.ALWAYS,[xh]:i.LESS,[Ol]:i.LEQUAL,[yh]:i.EQUAL,[bh]:i.GEQUAL,[Mh]:i.GREATER,[Sh]:i.NOTEQUAL};function dt(A,M){if(M.type===Qe&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===We||M.magFilter===ir||M.magFilter===Ji||M.magFilter===bn||M.minFilter===We||M.minFilter===ir||M.minFilter===Ji||M.minFilter===bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,G[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,G[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,G[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,it[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,it[M.minFilter]),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,lt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Ce||M.minFilter!==Ji&&M.minFilter!==bn||M.type===Qe&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function At(A,M){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",D));const j=M.source;let K=u.get(j);K===void 0&&(K={},u.set(j,K));const $=F(M);if($!==A.__cacheKey){K[$]===void 0&&(K[$]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),K[$].usedTimes++;const vt=K[A.__cacheKey];vt!==void 0&&(K[A.__cacheKey].usedTimes--,vt.usedTimes===0&&C(M)),A.__cacheKey=$,A.__webglTexture=K[$].texture}return z}function Qt(A,M,z){let j=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=i.TEXTURE_3D);const K=At(A,M),$=M.source;e.bindTexture(j,A.__webglTexture,i.TEXTURE0+z);const vt=n.get($);if($.version!==vt.__version||K===!0){e.activeTexture(i.TEXTURE0+z);const st=Jt.getPrimaries(Jt.workingColorSpace),rt=M.colorSpace===Sn?null:Jt.getPrimaries(M.colorSpace),Ut=M.colorSpace===Sn||st===rt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ut);let Q=_(M.image,!1,s.maxTextureSize);Q=Pt(M,Q);const gt=r.convert(M.format,M.colorSpace),Bt=r.convert(M.type);let wt=v(M.internalFormat,gt,Bt,M.colorSpace,M.isVideoTexture);dt(j,M);let ot;const kt=M.mipmaps,Vt=M.isVideoTexture!==!0,he=vt.__version===void 0||K===!0,L=$.dataReady,ct=w(M,Q);if(M.isDepthTexture)wt=y(M.format===Ai,M.type),he&&(Vt?e.texStorage2D(i.TEXTURE_2D,1,wt,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,wt,Q.width,Q.height,0,gt,Bt,null));else if(M.isDataTexture)if(kt.length>0){Vt&&he&&e.texStorage2D(i.TEXTURE_2D,ct,wt,kt[0].width,kt[0].height);for(let W=0,Y=kt.length;W<Y;W++)ot=kt[W],Vt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ot.width,ot.height,gt,Bt,ot.data):e.texImage2D(i.TEXTURE_2D,W,wt,ot.width,ot.height,0,gt,Bt,ot.data);M.generateMipmaps=!1}else Vt?(he&&e.texStorage2D(i.TEXTURE_2D,ct,wt,Q.width,Q.height),L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,gt,Bt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,wt,Q.width,Q.height,0,gt,Bt,Q.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Vt&&he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,wt,kt[0].width,kt[0].height,Q.depth);for(let W=0,Y=kt.length;W<Y;W++)if(ot=kt[W],M.format!==qe)if(gt!==null)if(Vt){if(L)if(M.layerUpdates.size>0){for(const et of M.layerUpdates){const Tt=ot.width*ot.height;e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,et,ot.width,ot.height,1,gt,ot.data.slice(Tt*et,Tt*(et+1)),0,0)}M.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ot.width,ot.height,Q.depth,gt,ot.data,0,0)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,W,wt,ot.width,ot.height,Q.depth,0,ot.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Vt?L&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,W,0,0,0,ot.width,ot.height,Q.depth,gt,Bt,ot.data):e.texImage3D(i.TEXTURE_2D_ARRAY,W,wt,ot.width,ot.height,Q.depth,0,gt,Bt,ot.data)}else{Vt&&he&&e.texStorage2D(i.TEXTURE_2D,ct,wt,kt[0].width,kt[0].height);for(let W=0,Y=kt.length;W<Y;W++)ot=kt[W],M.format!==qe?gt!==null?Vt?L&&e.compressedTexSubImage2D(i.TEXTURE_2D,W,0,0,ot.width,ot.height,gt,ot.data):e.compressedTexImage2D(i.TEXTURE_2D,W,wt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Vt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,ot.width,ot.height,gt,Bt,ot.data):e.texImage2D(i.TEXTURE_2D,W,wt,ot.width,ot.height,0,gt,Bt,ot.data)}else if(M.isDataArrayTexture)if(Vt){if(he&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,wt,Q.width,Q.height,Q.depth),L)if(M.layerUpdates.size>0){let W;switch(Bt){case i.UNSIGNED_BYTE:switch(gt){case i.ALPHA:W=1;break;case i.LUMINANCE:W=1;break;case i.LUMINANCE_ALPHA:W=2;break;case i.RGB:W=3;break;case i.RGBA:W=4;break;default:throw new Error(`Unknown texel size for format ${gt}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:W=1;break;default:throw new Error(`Unknown texel size for type ${Bt}.`)}const Y=Q.width*Q.height*W;for(const et of M.layerUpdates)e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,et,Q.width,Q.height,1,gt,Bt,Q.data.slice(Y*et,Y*(et+1)));M.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,gt,Bt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,wt,Q.width,Q.height,Q.depth,0,gt,Bt,Q.data);else if(M.isData3DTexture)Vt?(he&&e.texStorage3D(i.TEXTURE_3D,ct,wt,Q.width,Q.height,Q.depth),L&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,gt,Bt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,wt,Q.width,Q.height,Q.depth,0,gt,Bt,Q.data);else if(M.isFramebufferTexture){if(he)if(Vt)e.texStorage2D(i.TEXTURE_2D,ct,wt,Q.width,Q.height);else{let W=Q.width,Y=Q.height;for(let et=0;et<ct;et++)e.texImage2D(i.TEXTURE_2D,et,wt,W,Y,0,gt,Bt,null),W>>=1,Y>>=1}}else if(kt.length>0){if(Vt&&he){const W=ue(kt[0]);e.texStorage2D(i.TEXTURE_2D,ct,wt,W.width,W.height)}for(let W=0,Y=kt.length;W<Y;W++)ot=kt[W],Vt?L&&e.texSubImage2D(i.TEXTURE_2D,W,0,0,gt,Bt,ot):e.texImage2D(i.TEXTURE_2D,W,wt,gt,Bt,ot);M.generateMipmaps=!1}else if(Vt){if(he){const W=ue(Q);e.texStorage2D(i.TEXTURE_2D,ct,wt,W.width,W.height)}L&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Bt,Q)}else e.texImage2D(i.TEXTURE_2D,0,wt,gt,Bt,Q);p(M)&&m(j),vt.__version=$.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function X(A,M,z){if(M.image.length!==6)return;const j=At(A,M),K=M.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+z);const $=n.get(K);if(K.version!==$.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const vt=Jt.getPrimaries(Jt.workingColorSpace),st=M.colorSpace===Sn?null:Jt.getPrimaries(M.colorSpace),rt=M.colorSpace===Sn||vt===st?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt);const Ut=M.isCompressedTexture||M.image[0].isCompressedTexture,Q=M.image[0]&&M.image[0].isDataTexture,gt=[];for(let Y=0;Y<6;Y++)!Ut&&!Q?gt[Y]=_(M.image[Y],!0,s.maxCubemapSize):gt[Y]=Q?M.image[Y].image:M.image[Y],gt[Y]=Pt(M,gt[Y]);const Bt=gt[0],wt=r.convert(M.format,M.colorSpace),ot=r.convert(M.type),kt=v(M.internalFormat,wt,ot,M.colorSpace),Vt=M.isVideoTexture!==!0,he=$.__version===void 0||j===!0,L=K.dataReady;let ct=w(M,Bt);dt(i.TEXTURE_CUBE_MAP,M);let W;if(Ut){Vt&&he&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,kt,Bt.width,Bt.height);for(let Y=0;Y<6;Y++){W=gt[Y].mipmaps;for(let et=0;et<W.length;et++){const Tt=W[et];M.format!==qe?wt!==null?Vt?L&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et,kt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Vt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et,0,0,Tt.width,Tt.height,wt,ot,Tt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et,kt,Tt.width,Tt.height,0,wt,ot,Tt.data)}}}else{if(W=M.mipmaps,Vt&&he){W.length>0&&ct++;const Y=ue(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,kt,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Q){Vt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,gt[Y].width,gt[Y].height,wt,ot,gt[Y].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,kt,gt[Y].width,gt[Y].height,0,wt,ot,gt[Y].data);for(let et=0;et<W.length;et++){const Yt=W[et].image[Y].image;Vt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et+1,0,0,Yt.width,Yt.height,wt,ot,Yt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et+1,kt,Yt.width,Yt.height,0,wt,ot,Yt.data)}}else{Vt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,wt,ot,gt[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,kt,wt,ot,gt[Y]);for(let et=0;et<W.length;et++){const Tt=W[et];Vt?L&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et+1,0,0,wt,ot,Tt.image[Y]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Y,et+1,kt,wt,ot,Tt.image[Y])}}}p(M)&&m(i.TEXTURE_CUBE_MAP),$.__version=K.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function J(A,M,z,j,K,$){const vt=r.convert(z.format,z.colorSpace),st=r.convert(z.type),rt=v(z.internalFormat,vt,st,z.colorSpace);if(!n.get(M).__hasExternalTextures){const Q=Math.max(1,M.width>>$),gt=Math.max(1,M.height>>$);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,$,rt,Q,gt,M.depth,0,vt,st,null):e.texImage2D(K,$,rt,Q,gt,0,vt,st,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),qt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,K,n.get(z).__webglTexture,0,yt(M)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,K,n.get(z).__webglTexture,$),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ft(A,M,z){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer){const j=M.depthTexture,K=j&&j.isDepthTexture?j.type:null,$=y(M.stencilBuffer,K),vt=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,st=yt(M);qt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,st,$,M.width,M.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,st,$,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,$,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,A)}else{const j=M.textures;for(let K=0;K<j.length;K++){const $=j[K],vt=r.convert($.format,$.colorSpace),st=r.convert($.type),rt=v($.internalFormat,vt,st,$.colorSpace),Ut=yt(M);z&&qt(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut,rt,M.width,M.height):qt(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut,rt,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,rt,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function at(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const j=n.get(M.depthTexture).__webglTexture,K=yt(M);if(M.depthTexture.format===Mi)qt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,j,0);else if(M.depthTexture.format===Ai)qt(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Nt(A){const M=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");at(M.__webglFramebuffer,A)}else if(z){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]=i.createRenderbuffer(),ft(M.__webglDepthbuffer[j],A,!1)}else e.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),ft(M.__webglDepthbuffer,A,!1);e.bindFramebuffer(i.FRAMEBUFFER,null)}function Dt(A,M,z){const j=n.get(A);M!==void 0&&J(j.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&Nt(A)}function Gt(A){const M=A.texture,z=n.get(A),j=n.get(M);A.addEventListener("dispose",E);const K=A.textures,$=A.isWebGLCubeRenderTarget===!0,vt=K.length>1;if(vt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=M.version,a.memory.textures++),$){z.__webglFramebuffer=[];for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer[st]=[];for(let rt=0;rt<M.mipmaps.length;rt++)z.__webglFramebuffer[st][rt]=i.createFramebuffer()}else z.__webglFramebuffer[st]=i.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){z.__webglFramebuffer=[];for(let st=0;st<M.mipmaps.length;st++)z.__webglFramebuffer[st]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(vt)for(let st=0,rt=K.length;st<rt;st++){const Ut=n.get(K[st]);Ut.__webglTexture===void 0&&(Ut.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&qt(A)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let st=0;st<K.length;st++){const rt=K[st];z.__webglColorRenderbuffer[st]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[st]);const Ut=r.convert(rt.format,rt.colorSpace),Q=r.convert(rt.type),gt=v(rt.internalFormat,Ut,Q,rt.colorSpace,A.isXRRenderTarget===!0),Bt=yt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Bt,gt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+st,i.RENDERBUFFER,z.__webglColorRenderbuffer[st])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),ft(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if($){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),dt(i.TEXTURE_CUBE_MAP,M);for(let st=0;st<6;st++)if(M.mipmaps&&M.mipmaps.length>0)for(let rt=0;rt<M.mipmaps.length;rt++)J(z.__webglFramebuffer[st][rt],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,rt);else J(z.__webglFramebuffer[st],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+st,0);p(M)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let st=0,rt=K.length;st<rt;st++){const Ut=K[st],Q=n.get(Ut);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),dt(i.TEXTURE_2D,Ut),J(z.__webglFramebuffer,A,Ut,i.COLOR_ATTACHMENT0+st,i.TEXTURE_2D,0),p(Ut)&&m(i.TEXTURE_2D)}e.unbindTexture()}else{let st=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(st=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(st,j.__webglTexture),dt(st,M),M.mipmaps&&M.mipmaps.length>0)for(let rt=0;rt<M.mipmaps.length;rt++)J(z.__webglFramebuffer[rt],A,M,i.COLOR_ATTACHMENT0,st,rt);else J(z.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,st,0);p(M)&&m(st),e.unbindTexture()}A.depthBuffer&&Nt(A)}function I(A){const M=A.textures;for(let z=0,j=M.length;z<j;z++){const K=M[z];if(p(K)){const $=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,vt=n.get(K).__webglTexture;e.bindTexture($,vt),m($),e.unbindTexture()}}}const Ht=[],zt=[];function re(A){if(A.samples>0){if(qt(A)===!1){const M=A.textures,z=A.width,j=A.height;let K=i.COLOR_BUFFER_BIT;const $=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(A),st=M.length>1;if(st)for(let rt=0;rt<M.length;rt++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let rt=0;rt<M.length;rt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),st){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[rt]);const Ut=n.get(M[rt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ut,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,K,i.NEAREST),l===!0&&(Ht.length=0,zt.length=0,Ht.push(i.COLOR_ATTACHMENT0+rt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ht.push($),zt.push($),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,zt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),st)for(let rt=0;rt<M.length;rt++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.RENDERBUFFER,vt.__webglColorRenderbuffer[rt]);const Ut=n.get(M[rt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+rt,i.TEXTURE_2D,Ut,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function yt(A){return Math.min(s.maxSamples,A.samples)}function qt(A){const M=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ft(A){const M=a.render.frame;h.get(A)!==M&&(h.set(A,M),A.update())}function Pt(A,M){const z=A.colorSpace,j=A.format,K=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Pn&&z!==Sn&&(Jt.getTransfer(z)===se?(j!==qe||K!==Rn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),M}function ue(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=P,this.setTexture2D=V,this.setTexture2DArray=q,this.setTexture3D=H,this.setTextureCube=Z,this.rebindTextures=Dt,this.setupRenderTarget=Gt,this.updateRenderTargetMipmap=I,this.updateMultisampleRenderTarget=re,this.setupDepthRenderbuffer=Nt,this.setupFrameBufferTexture=J,this.useMultisampledRTT=qt}function zm(i,t){function e(n,s=Sn){let r;const a=Jt.getTransfer(s);if(n===Rn)return i.UNSIGNED_BYTE;if(n===Il)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Dl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===sh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===nh)return i.BYTE;if(n===ih)return i.SHORT;if(n===Is)return i.UNSIGNED_SHORT;if(n===Ll)return i.INT;if(n===Ti)return i.UNSIGNED_INT;if(n===Qe)return i.FLOAT;if(n===qs)return i.HALF_FLOAT;if(n===rh)return i.ALPHA;if(n===ah)return i.RGB;if(n===qe)return i.RGBA;if(n===oh)return i.LUMINANCE;if(n===lh)return i.LUMINANCE_ALPHA;if(n===Mi)return i.DEPTH_COMPONENT;if(n===Ai)return i.DEPTH_STENCIL;if(n===Ul)return i.RED;if(n===kl)return i.RED_INTEGER;if(n===ch)return i.RG;if(n===Nl)return i.RG_INTEGER;if(n===Fl)return i.RGBA_INTEGER;if(n===sr||n===rr||n===ar||n===or)if(a===se)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===sr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===sr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===rr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ar)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===or)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Pa||n===La||n===Ia||n===Da)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===La)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ia)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Da)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ua||n===ka||n===Na)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ua||n===ka)return a===se?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Na)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fa||n===Oa||n===Ba||n===za||n===Va||n===Ha||n===Ga||n===Wa||n===Xa||n===qa||n===Ya||n===ja||n===Ka||n===$a)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ba)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===za)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Va)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ha)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Ga)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Wa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Xa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===qa)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ya)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ja)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ka)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===$a)return a===se?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===lr||n===Za||n===Ja)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===lr)return a===se?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Za)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ja)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hh||n===Qa||n===to||n===eo)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===lr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Qa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===to)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eo)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ei?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Vm extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Me extends ae{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hm={type:"move"};class Ur{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Me,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Me,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new T,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new T),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Me,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new T,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new T),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Hm)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Me;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Gm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Wm=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Xm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Se,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new Cn({vertexShader:Gm,fragmentShader:Wm,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new pt(new Kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class qm extends $n{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null;const _=new Xm,p=e.getContextAttributes();let m=null,v=null;const y=[],w=[],D=new Ct;let E=null;const R=new Le;R.layers.enable(1),R.viewport=new ne;const C=new Le;C.layers.enable(2),C.viewport=new ne;const b=[R,C],x=new Vm;x.layers.enable(1),x.layers.enable(2);let P=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let J=y[X];return J===void 0&&(J=new Ur,y[X]=J),J.getTargetRaySpace()},this.getControllerGrip=function(X){let J=y[X];return J===void 0&&(J=new Ur,y[X]=J),J.getGripSpace()},this.getHand=function(X){let J=y[X];return J===void 0&&(J=new Ur,y[X]=J),J.getHandSpace()};function F(X){const J=w.indexOf(X.inputSource);if(J===-1)return;const ft=y[J];ft!==void 0&&(ft.update(X.inputSource,X.frame,c||a),ft.dispatchEvent({type:X.type,data:X.inputSource}))}function V(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",q);for(let X=0;X<y.length;X++){const J=w[X];J!==null&&(w[X]=null,y[X].disconnect(J))}P=null,B=null,_.reset(),t.setRenderTarget(m),f=null,u=null,d=null,s=null,v=null,Qt.stop(),n.isPresenting=!1,t.setPixelRatio(E),t.setSize(D.width,D.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){r=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){o=X,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(X){if(s=X,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",V),s.addEventListener("inputsourceschange",q),p.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const J={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,J),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),v=new jn(f.framebufferWidth,f.framebufferHeight,{format:qe,type:Rn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let J=null,ft=null,at=null;p.depth&&(at=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=p.stencil?Ai:Mi,ft=p.stencil?Ei:Ti);const Nt={colorFormat:e.RGBA8,depthFormat:at,scaleFactor:r};d=new XRWebGLBinding(s,e),u=d.createProjectionLayer(Nt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),v=new jn(u.textureWidth,u.textureHeight,{format:qe,type:Rn,depthTexture:new Zl(u.textureWidth,u.textureHeight,ft,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Qt.setContext(s),Qt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode};function q(X){for(let J=0;J<X.removed.length;J++){const ft=X.removed[J],at=w.indexOf(ft);at>=0&&(w[at]=null,y[at].disconnect(ft))}for(let J=0;J<X.added.length;J++){const ft=X.added[J];let at=w.indexOf(ft);if(at===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=w.length){w.push(ft),at=Dt;break}else if(w[Dt]===null){w[Dt]=ft,at=Dt;break}if(at===-1)break}const Nt=y[at];Nt&&Nt.connect(ft)}}const H=new T,Z=new T;function G(X,J,ft){H.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(ft.matrixWorld);const at=H.distanceTo(Z),Nt=J.projectionMatrix.elements,Dt=ft.projectionMatrix.elements,Gt=Nt[14]/(Nt[10]-1),I=Nt[14]/(Nt[10]+1),Ht=(Nt[9]+1)/Nt[5],zt=(Nt[9]-1)/Nt[5],re=(Nt[8]-1)/Nt[0],yt=(Dt[8]+1)/Dt[0],qt=Gt*re,Ft=Gt*yt,Pt=at/(-re+yt),ue=Pt*-re;J.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(ue),X.translateZ(Pt),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert();const A=Gt+Pt,M=I+Pt,z=qt-ue,j=Ft+(at-ue),K=Ht*I/M*A,$=zt*I/M*A;X.projectionMatrix.makePerspective(z,j,K,$,A,M),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}function it(X,J){J===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(J.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(s===null)return;_.texture!==null&&(X.near=_.depthNear,X.far=_.depthFar),x.near=C.near=R.near=X.near,x.far=C.far=R.far=X.far,(P!==x.near||B!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),P=x.near,B=x.far,R.near=P,R.far=B,C.near=P,C.far=B,R.updateProjectionMatrix(),C.updateProjectionMatrix(),X.updateProjectionMatrix());const J=X.parent,ft=x.cameras;it(x,J);for(let at=0;at<ft.length;at++)it(ft[at],J);ft.length===2?G(x,R,C):x.projectionMatrix.copy(R.projectionMatrix),lt(X,x,J)};function lt(X,J,ft){ft===null?X.matrix.copy(J.matrixWorld):(X.matrix.copy(ft.matrixWorld),X.matrix.invert(),X.matrix.multiply(J.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(J.projectionMatrix),X.projectionMatrixInverse.copy(J.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=Ri*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(X){l=X,u!==null&&(u.fixedFoveation=X),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=X)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let dt=null;function At(X,J){if(h=J.getViewerPose(c||a),g=J,h!==null){const ft=h.views;f!==null&&(t.setRenderTargetFramebuffer(v,f.framebuffer),t.setRenderTarget(v));let at=!1;ft.length!==x.cameras.length&&(x.cameras.length=0,at=!0);for(let Dt=0;Dt<ft.length;Dt++){const Gt=ft[Dt];let I=null;if(f!==null)I=f.getViewport(Gt);else{const zt=d.getViewSubImage(u,Gt);I=zt.viewport,Dt===0&&(t.setRenderTargetTextures(v,zt.colorTexture,u.ignoreDepthValues?void 0:zt.depthStencilTexture),t.setRenderTarget(v))}let Ht=b[Dt];Ht===void 0&&(Ht=new Le,Ht.layers.enable(Dt),Ht.viewport=new ne,b[Dt]=Ht),Ht.matrix.fromArray(Gt.transform.matrix),Ht.matrix.decompose(Ht.position,Ht.quaternion,Ht.scale),Ht.projectionMatrix.fromArray(Gt.projectionMatrix),Ht.projectionMatrixInverse.copy(Ht.projectionMatrix).invert(),Ht.viewport.set(I.x,I.y,I.width,I.height),Dt===0&&(x.matrix.copy(Ht.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),at===!0&&x.cameras.push(Ht)}const Nt=s.enabledFeatures;if(Nt&&Nt.includes("depth-sensing")){const Dt=d.getDepthInformation(ft[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,s.renderState)}}for(let ft=0;ft<y.length;ft++){const at=w[ft],Nt=y[ft];at!==null&&Nt!==void 0&&Nt.update(at,J,c||a)}dt&&dt(X,J),J.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:J}),g=null}const Qt=new Kl;Qt.setAnimationLoop(At),this.setAnimationLoop=function(X){dt=X},this.dispose=function(){}}}const zn=new je,Ym=new Ot;function jm(i,t){function e(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,ql(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,y,w){m.isMeshBasicMaterial||m.isMeshLambertMaterial?r(p,m):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,w)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,y):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,e(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Ie&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,e(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Ie&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,e(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,e(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);const v=t.get(m),y=v.envMap,w=v.envMapRotation;y&&(p.envMap.value=y,zn.copy(w),zn.x*=-1,zn.y*=-1,zn.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(zn.y*=-1,zn.z*=-1),p.envMapRotation.value.setFromMatrix4(Ym.makeRotationFromEuler(zn)),p.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,y){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=y*.5,m.map&&(p.map.value=m.map,e(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,e(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,e(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Ie&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){const v=t.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Km(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,y){const w=y.program;n.uniformBlockBinding(v,w)}function c(v,y){let w=s[v.id];w===void 0&&(g(v),w=h(v),s[v.id]=w,v.addEventListener("dispose",p));const D=y.program;n.updateUBOMapping(v,D);const E=t.render.frame;r[v.id]!==E&&(u(v),r[v.id]=E)}function h(v){const y=d();v.__bindingPointIndex=y;const w=i.createBuffer(),D=v.__size,E=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,D,E),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function d(){for(let v=0;v<o;v++)if(a.indexOf(v)===-1)return a.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(v){const y=s[v.id],w=v.uniforms,D=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let E=0,R=w.length;E<R;E++){const C=Array.isArray(w[E])?w[E]:[w[E]];for(let b=0,x=C.length;b<x;b++){const P=C[b];if(f(P,E,b,D)===!0){const B=P.__offset,F=Array.isArray(P.value)?P.value:[P.value];let V=0;for(let q=0;q<F.length;q++){const H=F[q],Z=_(H);typeof H=="number"||typeof H=="boolean"?(P.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,B+V,P.__data)):H.isMatrix3?(P.__data[0]=H.elements[0],P.__data[1]=H.elements[1],P.__data[2]=H.elements[2],P.__data[3]=0,P.__data[4]=H.elements[3],P.__data[5]=H.elements[4],P.__data[6]=H.elements[5],P.__data[7]=0,P.__data[8]=H.elements[6],P.__data[9]=H.elements[7],P.__data[10]=H.elements[8],P.__data[11]=0):(H.toArray(P.__data,V),V+=Z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,B,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(v,y,w,D){const E=v.value,R=y+"_"+w;if(D[R]===void 0)return typeof E=="number"||typeof E=="boolean"?D[R]=E:D[R]=E.clone(),!0;{const C=D[R];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return D[R]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(v){const y=v.uniforms;let w=0;const D=16;for(let R=0,C=y.length;R<C;R++){const b=Array.isArray(y[R])?y[R]:[y[R]];for(let x=0,P=b.length;x<P;x++){const B=b[x],F=Array.isArray(B.value)?B.value:[B.value];for(let V=0,q=F.length;V<q;V++){const H=F[V],Z=_(H),G=w%D;G!==0&&D-G<Z.boundary&&(w+=D-G),B.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),B.__offset=w,w+=Z.storage}}}const E=w%D;return E>0&&(w+=D-E),v.__size=w,v.__cache={},this}function _(v){const y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=48,y.storage=48):v.isMatrix4?(y.boundary=64,y.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),y}function p(v){const y=v.target;y.removeEventListener("dispose",p);const w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function m(){for(const v in s)i.deleteBuffer(s[v]);a=[],s={},r={}}return{bind:l,update:c,dispose:m}}class $m{constructor(t={}){const{canvas:e=Vh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=t;this.isWebGLRenderer=!0;let u;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=n.getContextAttributes().alpha}else u=a;const f=new Uint32Array(4),g=new Int32Array(4);let _=null,p=null;const m=[],v=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ze,this.toneMapping=En,this.toneMappingExposure=1;const y=this;let w=!1,D=0,E=0,R=null,C=-1,b=null;const x=new ne,P=new ne;let B=null;const F=new Rt(0);let V=0,q=e.width,H=e.height,Z=1,G=null,it=null;const lt=new ne(0,0,q,H),dt=new ne(0,0,q,H);let At=!1;const Qt=new ca;let X=!1,J=!1;const ft=new Ot,at=new T,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Dt=!1;function Gt(){return R===null?Z:1}let I=n;function Ht(S,U){return e.getContext(S,U)}try{const S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${ea}`),e.addEventListener("webglcontextlost",ct,!1),e.addEventListener("webglcontextrestored",W,!1),e.addEventListener("webglcontextcreationerror",Y,!1),I===null){const U="webgl2";if(I=Ht(U,S),I===null)throw Ht(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let zt,re,yt,qt,Ft,Pt,ue,A,M,z,j,K,$,vt,st,rt,Ut,Q,gt,Bt,wt,ot,kt,Vt;function he(){zt=new sp(I),zt.init(),ot=new zm(I,zt),re=new Jf(I,zt,t,ot),yt=new Om(I),qt=new op(I),Ft=new wm,Pt=new Bm(I,zt,yt,Ft,re,ot,qt),ue=new tp(y),A=new ip(y),M=new fd(I),kt=new $f(I,M),z=new rp(I,M,qt,kt),j=new cp(I,z,M,qt),gt=new lp(I,re,Pt),rt=new Qf(Ft),K=new bm(y,ue,A,zt,re,kt,rt),$=new jm(y,Ft),vt=new Em,st=new Im(zt),Q=new Kf(y,ue,A,yt,j,u,l),Ut=new Fm(y,j,re),Vt=new Km(I,qt,re,yt),Bt=new Zf(I,zt,qt),wt=new ap(I,zt,qt),qt.programs=K.programs,y.capabilities=re,y.extensions=zt,y.properties=Ft,y.renderLists=vt,y.shadowMap=Ut,y.state=yt,y.info=qt}he();const L=new qm(y,I);this.xr=L,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=zt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=zt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return Z},this.setPixelRatio=function(S){S!==void 0&&(Z=S,this.setSize(q,H,!1))},this.getSize=function(S){return S.set(q,H)},this.setSize=function(S,U,N=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=S,H=U,e.width=Math.floor(S*Z),e.height=Math.floor(U*Z),N===!0&&(e.style.width=S+"px",e.style.height=U+"px"),this.setViewport(0,0,S,U)},this.getDrawingBufferSize=function(S){return S.set(q*Z,H*Z).floor()},this.setDrawingBufferSize=function(S,U,N){q=S,H=U,Z=N,e.width=Math.floor(S*N),e.height=Math.floor(U*N),this.setViewport(0,0,S,U)},this.getCurrentViewport=function(S){return S.copy(x)},this.getViewport=function(S){return S.copy(lt)},this.setViewport=function(S,U,N,O){S.isVector4?lt.set(S.x,S.y,S.z,S.w):lt.set(S,U,N,O),yt.viewport(x.copy(lt).multiplyScalar(Z).round())},this.getScissor=function(S){return S.copy(dt)},this.setScissor=function(S,U,N,O){S.isVector4?dt.set(S.x,S.y,S.z,S.w):dt.set(S,U,N,O),yt.scissor(P.copy(dt).multiplyScalar(Z).round())},this.getScissorTest=function(){return At},this.setScissorTest=function(S){yt.setScissorTest(At=S)},this.setOpaqueSort=function(S){G=S},this.setTransparentSort=function(S){it=S},this.getClearColor=function(S){return S.copy(Q.getClearColor())},this.setClearColor=function(){Q.setClearColor.apply(Q,arguments)},this.getClearAlpha=function(){return Q.getClearAlpha()},this.setClearAlpha=function(){Q.setClearAlpha.apply(Q,arguments)},this.clear=function(S=!0,U=!0,N=!0){let O=0;if(S){let k=!1;if(R!==null){const tt=R.texture.format;k=tt===Fl||tt===Nl||tt===kl}if(k){const tt=R.texture.type,ht=tt===Rn||tt===Ti||tt===Is||tt===Ei||tt===Il||tt===Dl,ut=Q.getClearColor(),mt=Q.getClearAlpha(),Mt=ut.r,St=ut.g,xt=ut.b;ht?(f[0]=Mt,f[1]=St,f[2]=xt,f[3]=mt,I.clearBufferuiv(I.COLOR,0,f)):(g[0]=Mt,g[1]=St,g[2]=xt,g[3]=mt,I.clearBufferiv(I.COLOR,0,g))}else O|=I.COLOR_BUFFER_BIT}U&&(O|=I.DEPTH_BUFFER_BIT),N&&(O|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",ct,!1),e.removeEventListener("webglcontextrestored",W,!1),e.removeEventListener("webglcontextcreationerror",Y,!1),vt.dispose(),st.dispose(),Ft.dispose(),ue.dispose(),A.dispose(),j.dispose(),kt.dispose(),Vt.dispose(),K.dispose(),L.dispose(),L.removeEventListener("sessionstart",Ke),L.removeEventListener("sessionend",$e),Dn.stop()};function ct(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function W(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;const S=qt.autoReset,U=Ut.enabled,N=Ut.autoUpdate,O=Ut.needsUpdate,k=Ut.type;he(),qt.autoReset=S,Ut.enabled=U,Ut.autoUpdate=N,Ut.needsUpdate=O,Ut.type=k}function Y(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function et(S){const U=S.target;U.removeEventListener("dispose",et),Tt(U)}function Tt(S){Yt(S),Ft.remove(S)}function Yt(S){const U=Ft.get(S).programs;U!==void 0&&(U.forEach(function(N){K.releaseProgram(N)}),S.isShaderMaterial&&K.releaseShaderCache(S))}this.renderBufferDirect=function(S,U,N,O,k,tt){U===null&&(U=Nt);const ht=k.isMesh&&k.matrixWorld.determinant()<0,ut=fc(S,U,N,O,k);yt.setMaterial(O,ht);let mt=N.index,Mt=1;if(O.wireframe===!0){if(mt=z.getWireframeAttribute(N),mt===void 0)return;Mt=2}const St=N.drawRange,xt=N.attributes.position;let jt=St.start*Mt,oe=(St.start+St.count)*Mt;tt!==null&&(jt=Math.max(jt,tt.start*Mt),oe=Math.min(oe,(tt.start+tt.count)*Mt)),mt!==null?(jt=Math.max(jt,0),oe=Math.min(oe,mt.count)):xt!=null&&(jt=Math.max(jt,0),oe=Math.min(oe,xt.count));const le=oe-jt;if(le<0||le===1/0)return;kt.setup(k,O,ut,N,mt);let Ue,Kt=Bt;if(mt!==null&&(Ue=M.get(mt),Kt=wt,Kt.setIndex(Ue)),k.isMesh)O.wireframe===!0?(yt.setLineWidth(O.wireframeLinewidth*Gt()),Kt.setMode(I.LINES)):Kt.setMode(I.TRIANGLES);else if(k.isLine){let _t=O.linewidth;_t===void 0&&(_t=1),yt.setLineWidth(_t*Gt()),k.isLineSegments?Kt.setMode(I.LINES):k.isLineLoop?Kt.setMode(I.LINE_LOOP):Kt.setMode(I.LINE_STRIP)}else k.isPoints?Kt.setMode(I.POINTS):k.isSprite&&Kt.setMode(I.TRIANGLES);if(k.isBatchedMesh)k._multiDrawInstances!==null?Kt.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances):Kt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else if(k.isInstancedMesh)Kt.renderInstances(jt,le,k.count);else if(N.isInstancedBufferGeometry){const _t=N._maxInstanceCount!==void 0?N._maxInstanceCount:1/0,Ee=Math.min(N.instanceCount,_t);Kt.renderInstances(jt,le,Ee)}else Kt.render(jt,le)};function de(S,U,N){S.transparent===!0&&S.side===dn&&S.forceSinglePass===!1?(S.side=Ie,S.needsUpdate=!0,$i(S,U,N),S.side=An,S.needsUpdate=!0,$i(S,U,N),S.side=dn):$i(S,U,N)}this.compile=function(S,U,N=null){N===null&&(N=S),p=st.get(N),p.init(U),v.push(p),N.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==N&&S.traverseVisible(function(k){k.isLight&&k.layers.test(U.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const O=new Set;return S.traverse(function(k){const tt=k.material;if(tt)if(Array.isArray(tt))for(let ht=0;ht<tt.length;ht++){const ut=tt[ht];de(ut,N,k),O.add(ut)}else de(tt,N,k),O.add(tt)}),v.pop(),p=null,O},this.compileAsync=function(S,U,N=null){const O=this.compile(S,U,N);return new Promise(k=>{function tt(){if(O.forEach(function(ht){Ft.get(ht).currentProgram.isReady()&&O.delete(ht)}),O.size===0){k(S);return}setTimeout(tt,10)}zt.get("KHR_parallel_shader_compile")!==null?tt():setTimeout(tt,10)})};let _e=null;function te(S){_e&&_e(S)}function Ke(){Dn.stop()}function $e(){Dn.start()}const Dn=new Kl;Dn.setAnimationLoop(te),typeof self<"u"&&Dn.setContext(self),this.setAnimationLoop=function(S){_e=S,L.setAnimationLoop(S),S===null?Dn.stop():Dn.start()},L.addEventListener("sessionstart",Ke),L.addEventListener("sessionend",$e),this.render=function(S,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(U),U=L.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,U,R),p=st.get(S,v.length),p.init(U),v.push(p),ft.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Qt.setFromProjectionMatrix(ft),J=this.localClippingEnabled,X=rt.init(this.clippingPlanes,J),_=vt.get(S,m.length),_.init(),m.push(_),L.enabled===!0&&L.isPresenting===!0){const tt=y.xr.getDepthSensingMesh();tt!==null&&Qs(tt,U,-1/0,y.sortObjects)}Qs(S,U,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(G,it),Dt=L.enabled===!1||L.isPresenting===!1||L.hasDepthSensing()===!1,Dt&&Q.addToRenderList(_,S),this.info.render.frame++,X===!0&&rt.beginShadows();const N=p.state.shadowsArray;Ut.render(N,S,U),X===!0&&rt.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=_.opaque,k=_.transmissive;if(p.setupLights(),U.isArrayCamera){const tt=U.cameras;if(k.length>0)for(let ht=0,ut=tt.length;ht<ut;ht++){const mt=tt[ht];ya(O,k,S,mt)}Dt&&Q.render(S);for(let ht=0,ut=tt.length;ht<ut;ht++){const mt=tt[ht];xa(_,S,mt,mt.viewport)}}else k.length>0&&ya(O,k,S,U),Dt&&Q.render(S),xa(_,S,U);R!==null&&(Pt.updateMultisampleRenderTarget(R),Pt.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(y,S,U),kt.resetDefaultState(),C=-1,b=null,v.pop(),v.length>0?(p=v[v.length-1],X===!0&&rt.setGlobalState(y.clippingPlanes,p.state.camera)):p=null,m.pop(),m.length>0?_=m[m.length-1]:_=null};function Qs(S,U,N,O){if(S.visible===!1)return;if(S.layers.test(U.layers)){if(S.isGroup)N=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(U);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Qt.intersectsSprite(S)){O&&at.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ft);const ht=j.update(S),ut=S.material;ut.visible&&_.push(S,ht,ut,N,at.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Qt.intersectsObject(S))){const ht=j.update(S),ut=S.material;if(O&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),at.copy(S.boundingSphere.center)):(ht.boundingSphere===null&&ht.computeBoundingSphere(),at.copy(ht.boundingSphere.center)),at.applyMatrix4(S.matrixWorld).applyMatrix4(ft)),Array.isArray(ut)){const mt=ht.groups;for(let Mt=0,St=mt.length;Mt<St;Mt++){const xt=mt[Mt],jt=ut[xt.materialIndex];jt&&jt.visible&&_.push(S,ht,jt,N,at.z,xt)}}else ut.visible&&_.push(S,ht,ut,N,at.z,null)}}const tt=S.children;for(let ht=0,ut=tt.length;ht<ut;ht++)Qs(tt[ht],U,N,O)}function xa(S,U,N,O){const k=S.opaque,tt=S.transmissive,ht=S.transparent;p.setupLightsView(N),X===!0&&rt.setGlobalState(y.clippingPlanes,N),O&&yt.viewport(x.copy(O)),k.length>0&&Ki(k,U,N),tt.length>0&&Ki(tt,U,N),ht.length>0&&Ki(ht,U,N),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function ya(S,U,N,O){if((N.isScene===!0?N.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[O.id]===void 0&&(p.state.transmissionRenderTarget[O.id]=new jn(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?qs:Rn,minFilter:bn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Jt.workingColorSpace}));const tt=p.state.transmissionRenderTarget[O.id],ht=O.viewport||x;tt.setSize(ht.z,ht.w);const ut=y.getRenderTarget();y.setRenderTarget(tt),y.getClearColor(F),V=y.getClearAlpha(),V<1&&y.setClearColor(16777215,.5),Dt?Q.render(N):y.clear();const mt=y.toneMapping;y.toneMapping=En;const Mt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),p.setupLightsView(O),X===!0&&rt.setGlobalState(y.clippingPlanes,O),Ki(S,N,O),Pt.updateMultisampleRenderTarget(tt),Pt.updateRenderTargetMipmap(tt),zt.has("WEBGL_multisampled_render_to_texture")===!1){let St=!1;for(let xt=0,jt=U.length;xt<jt;xt++){const oe=U[xt],le=oe.object,Ue=oe.geometry,Kt=oe.material,_t=oe.group;if(Kt.side===dn&&le.layers.test(O.layers)){const Ee=Kt.side;Kt.side=Ie,Kt.needsUpdate=!0,Ma(le,N,O,Ue,Kt,_t),Kt.side=Ee,Kt.needsUpdate=!0,St=!0}}St===!0&&(Pt.updateMultisampleRenderTarget(tt),Pt.updateRenderTargetMipmap(tt))}y.setRenderTarget(ut),y.setClearColor(F,V),Mt!==void 0&&(O.viewport=Mt),y.toneMapping=mt}function Ki(S,U,N){const O=U.isScene===!0?U.overrideMaterial:null;for(let k=0,tt=S.length;k<tt;k++){const ht=S[k],ut=ht.object,mt=ht.geometry,Mt=O===null?ht.material:O,St=ht.group;ut.layers.test(N.layers)&&Ma(ut,U,N,mt,Mt,St)}}function Ma(S,U,N,O,k,tt){S.onBeforeRender(y,U,N,O,k,tt),S.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(y,U,N,O,S,tt),k.transparent===!0&&k.side===dn&&k.forceSinglePass===!1?(k.side=Ie,k.needsUpdate=!0,y.renderBufferDirect(N,U,O,k,S,tt),k.side=An,k.needsUpdate=!0,y.renderBufferDirect(N,U,O,k,S,tt),k.side=dn):y.renderBufferDirect(N,U,O,k,S,tt),S.onAfterRender(y,U,N,O,k,tt)}function $i(S,U,N){U.isScene!==!0&&(U=Nt);const O=Ft.get(S),k=p.state.lights,tt=p.state.shadowsArray,ht=k.state.version,ut=K.getParameters(S,k.state,tt,U,N),mt=K.getProgramCacheKey(ut);let Mt=O.programs;O.environment=S.isMeshStandardMaterial?U.environment:null,O.fog=U.fog,O.envMap=(S.isMeshStandardMaterial?A:ue).get(S.envMap||O.environment),O.envMapRotation=O.environment!==null&&S.envMap===null?U.environmentRotation:S.envMapRotation,Mt===void 0&&(S.addEventListener("dispose",et),Mt=new Map,O.programs=Mt);let St=Mt.get(mt);if(St!==void 0){if(O.currentProgram===St&&O.lightsStateVersion===ht)return ba(S,ut),St}else ut.uniforms=K.getUniforms(S),S.onBuild(N,ut,y),S.onBeforeCompile(ut,y),St=K.acquireProgram(ut,mt),Mt.set(mt,St),O.uniforms=ut.uniforms;const xt=O.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(xt.clippingPlanes=rt.uniform),ba(S,ut),O.needsLights=mc(S),O.lightsStateVersion=ht,O.needsLights&&(xt.ambientLightColor.value=k.state.ambient,xt.lightProbe.value=k.state.probe,xt.directionalLights.value=k.state.directional,xt.directionalLightShadows.value=k.state.directionalShadow,xt.spotLights.value=k.state.spot,xt.spotLightShadows.value=k.state.spotShadow,xt.rectAreaLights.value=k.state.rectArea,xt.ltc_1.value=k.state.rectAreaLTC1,xt.ltc_2.value=k.state.rectAreaLTC2,xt.pointLights.value=k.state.point,xt.pointLightShadows.value=k.state.pointShadow,xt.hemisphereLights.value=k.state.hemi,xt.directionalShadowMap.value=k.state.directionalShadowMap,xt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,xt.spotShadowMap.value=k.state.spotShadowMap,xt.spotLightMatrix.value=k.state.spotLightMatrix,xt.spotLightMap.value=k.state.spotLightMap,xt.pointShadowMap.value=k.state.pointShadowMap,xt.pointShadowMatrix.value=k.state.pointShadowMatrix),O.currentProgram=St,O.uniformsList=null,St}function Sa(S){if(S.uniformsList===null){const U=S.currentProgram.getUniforms();S.uniformsList=Cs.seqWithValue(U.seq,S.uniforms)}return S.uniformsList}function ba(S,U){const N=Ft.get(S);N.outputColorSpace=U.outputColorSpace,N.batching=U.batching,N.batchingColor=U.batchingColor,N.instancing=U.instancing,N.instancingColor=U.instancingColor,N.instancingMorph=U.instancingMorph,N.skinning=U.skinning,N.morphTargets=U.morphTargets,N.morphNormals=U.morphNormals,N.morphColors=U.morphColors,N.morphTargetsCount=U.morphTargetsCount,N.numClippingPlanes=U.numClippingPlanes,N.numIntersection=U.numClipIntersection,N.vertexAlphas=U.vertexAlphas,N.vertexTangents=U.vertexTangents,N.toneMapping=U.toneMapping}function fc(S,U,N,O,k){U.isScene!==!0&&(U=Nt),Pt.resetTextureUnits();const tt=U.fog,ht=O.isMeshStandardMaterial?U.environment:null,ut=R===null?y.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Pn,mt=(O.isMeshStandardMaterial?A:ue).get(O.envMap||ht),Mt=O.vertexColors===!0&&!!N.attributes.color&&N.attributes.color.itemSize===4,St=!!N.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),xt=!!N.morphAttributes.position,jt=!!N.morphAttributes.normal,oe=!!N.morphAttributes.color;let le=En;O.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(le=y.toneMapping);const Ue=N.morphAttributes.position||N.morphAttributes.normal||N.morphAttributes.color,Kt=Ue!==void 0?Ue.length:0,_t=Ft.get(O),Ee=p.state.lights;if(X===!0&&(J===!0||S!==b)){const Oe=S===b&&O.id===C;rt.setState(O,S,Oe)}let ee=!1;O.version===_t.__version?(_t.needsLights&&_t.lightsStateVersion!==Ee.state.version||_t.outputColorSpace!==ut||k.isBatchedMesh&&_t.batching===!1||!k.isBatchedMesh&&_t.batching===!0||k.isBatchedMesh&&_t.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&_t.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&_t.instancing===!1||!k.isInstancedMesh&&_t.instancing===!0||k.isSkinnedMesh&&_t.skinning===!1||!k.isSkinnedMesh&&_t.skinning===!0||k.isInstancedMesh&&_t.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&_t.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&_t.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&_t.instancingMorph===!1&&k.morphTexture!==null||_t.envMap!==mt||O.fog===!0&&_t.fog!==tt||_t.numClippingPlanes!==void 0&&(_t.numClippingPlanes!==rt.numPlanes||_t.numIntersection!==rt.numIntersection)||_t.vertexAlphas!==Mt||_t.vertexTangents!==St||_t.morphTargets!==xt||_t.morphNormals!==jt||_t.morphColors!==oe||_t.toneMapping!==le||_t.morphTargetsCount!==Kt)&&(ee=!0):(ee=!0,_t.__version=O.version);let en=_t.currentProgram;ee===!0&&(en=$i(O,U,k));let Zi=!1,Un=!1,tr=!1;const ve=en.getUniforms(),mn=_t.uniforms;if(yt.useProgram(en.program)&&(Zi=!0,Un=!0,tr=!0),O.id!==C&&(C=O.id,Un=!0),Zi||b!==S){ve.setValue(I,"projectionMatrix",S.projectionMatrix),ve.setValue(I,"viewMatrix",S.matrixWorldInverse);const Oe=ve.map.cameraPosition;Oe!==void 0&&Oe.setValue(I,at.setFromMatrixPosition(S.matrixWorld)),re.logarithmicDepthBuffer&&ve.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ve.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),b!==S&&(b=S,Un=!0,tr=!0)}if(k.isSkinnedMesh){ve.setOptional(I,k,"bindMatrix"),ve.setOptional(I,k,"bindMatrixInverse");const Oe=k.skeleton;Oe&&(Oe.boneTexture===null&&Oe.computeBoneTexture(),ve.setValue(I,"boneTexture",Oe.boneTexture,Pt))}k.isBatchedMesh&&(ve.setOptional(I,k,"batchingTexture"),ve.setValue(I,"batchingTexture",k._matricesTexture,Pt),ve.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&ve.setValue(I,"batchingColorTexture",k._colorsTexture,Pt));const er=N.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0)&&gt.update(k,N,en),(Un||_t.receiveShadow!==k.receiveShadow)&&(_t.receiveShadow=k.receiveShadow,ve.setValue(I,"receiveShadow",k.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(mn.envMap.value=mt,mn.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&U.environment!==null&&(mn.envMapIntensity.value=U.environmentIntensity),Un&&(ve.setValue(I,"toneMappingExposure",y.toneMappingExposure),_t.needsLights&&pc(mn,tr),tt&&O.fog===!0&&$.refreshFogUniforms(mn,tt),$.refreshMaterialUniforms(mn,O,Z,H,p.state.transmissionRenderTarget[S.id]),Cs.upload(I,Sa(_t),mn,Pt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Cs.upload(I,Sa(_t),mn,Pt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ve.setValue(I,"center",k.center),ve.setValue(I,"modelViewMatrix",k.modelViewMatrix),ve.setValue(I,"normalMatrix",k.normalMatrix),ve.setValue(I,"modelMatrix",k.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const Oe=O.uniformsGroups;for(let nr=0,gc=Oe.length;nr<gc;nr++){const wa=Oe[nr];Vt.update(wa,en),Vt.bind(wa,en)}}return en}function pc(S,U){S.ambientLightColor.needsUpdate=U,S.lightProbe.needsUpdate=U,S.directionalLights.needsUpdate=U,S.directionalLightShadows.needsUpdate=U,S.pointLights.needsUpdate=U,S.pointLightShadows.needsUpdate=U,S.spotLights.needsUpdate=U,S.spotLightShadows.needsUpdate=U,S.rectAreaLights.needsUpdate=U,S.hemisphereLights.needsUpdate=U}function mc(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return D},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,U,N){Ft.get(S.texture).__webglTexture=U,Ft.get(S.depthTexture).__webglTexture=N;const O=Ft.get(S);O.__hasExternalTextures=!0,O.__autoAllocateDepthBuffer=N===void 0,O.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),O.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,U){const N=Ft.get(S);N.__webglFramebuffer=U,N.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(S,U=0,N=0){R=S,D=U,E=N;let O=!0,k=null,tt=!1,ht=!1;if(S){const mt=Ft.get(S);mt.__useDefaultFramebuffer!==void 0?(yt.bindFramebuffer(I.FRAMEBUFFER,null),O=!1):mt.__webglFramebuffer===void 0?Pt.setupRenderTarget(S):mt.__hasExternalTextures&&Pt.rebindTextures(S,Ft.get(S.texture).__webglTexture,Ft.get(S.depthTexture).__webglTexture);const Mt=S.texture;(Mt.isData3DTexture||Mt.isDataArrayTexture||Mt.isCompressedArrayTexture)&&(ht=!0);const St=Ft.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(St[U])?k=St[U][N]:k=St[U],tt=!0):S.samples>0&&Pt.useMultisampledRTT(S)===!1?k=Ft.get(S).__webglMultisampledFramebuffer:Array.isArray(St)?k=St[N]:k=St,x.copy(S.viewport),P.copy(S.scissor),B=S.scissorTest}else x.copy(lt).multiplyScalar(Z).floor(),P.copy(dt).multiplyScalar(Z).floor(),B=At;if(yt.bindFramebuffer(I.FRAMEBUFFER,k)&&O&&yt.drawBuffers(S,k),yt.viewport(x),yt.scissor(P),yt.setScissorTest(B),tt){const mt=Ft.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+U,mt.__webglTexture,N)}else if(ht){const mt=Ft.get(S.texture),Mt=U||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,mt.__webglTexture,N||0,Mt)}C=-1},this.readRenderTargetPixels=function(S,U,N,O,k,tt,ht){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ut=Ft.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(ut=ut[ht]),ut){yt.bindFramebuffer(I.FRAMEBUFFER,ut);try{const mt=S.texture,Mt=mt.format,St=mt.type;if(!re.textureFormatReadable(Mt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!re.textureTypeReadable(St)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=S.width-O&&N>=0&&N<=S.height-k&&I.readPixels(U,N,O,k,ot.convert(Mt),ot.convert(St),tt)}finally{const mt=R!==null?Ft.get(R).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(S,U,N,O,k,tt,ht){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ut=Ft.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ht!==void 0&&(ut=ut[ht]),ut){yt.bindFramebuffer(I.FRAMEBUFFER,ut);try{const mt=S.texture,Mt=mt.format,St=mt.type;if(!re.textureFormatReadable(Mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!re.textureTypeReadable(St))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=S.width-O&&N>=0&&N<=S.height-k){const xt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,xt),I.bufferData(I.PIXEL_PACK_BUFFER,tt.byteLength,I.STREAM_READ),I.readPixels(U,N,O,k,ot.convert(Mt),ot.convert(St),0),I.flush();const jt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);await Hh(I,jt,4);try{I.bindBuffer(I.PIXEL_PACK_BUFFER,xt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,tt)}finally{I.deleteBuffer(xt),I.deleteSync(jt)}return tt}}finally{const mt=R!==null?Ft.get(R).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,mt)}}},this.copyFramebufferToTexture=function(S,U=null,N=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,S=arguments[1]);const O=Math.pow(2,-N),k=Math.floor(S.image.width*O),tt=Math.floor(S.image.height*O),ht=U!==null?U.x:0,ut=U!==null?U.y:0;Pt.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,N,0,0,ht,ut,k,tt),yt.unbindTexture()},this.copyTextureToTexture=function(S,U,N=null,O=null,k=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),O=arguments[0]||null,S=arguments[1],U=arguments[2],k=arguments[3]||0,N=null);let tt,ht,ut,mt,Mt,St;N!==null?(tt=N.max.x-N.min.x,ht=N.max.y-N.min.y,ut=N.min.x,mt=N.min.y):(tt=S.image.width,ht=S.image.height,ut=0,mt=0),O!==null?(Mt=O.x,St=O.y):(Mt=0,St=0);const xt=ot.convert(U.format),jt=ot.convert(U.type);Pt.setTexture2D(U,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const oe=I.getParameter(I.UNPACK_ROW_LENGTH),le=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ue=I.getParameter(I.UNPACK_SKIP_PIXELS),Kt=I.getParameter(I.UNPACK_SKIP_ROWS),_t=I.getParameter(I.UNPACK_SKIP_IMAGES),Ee=S.isCompressedTexture?S.mipmaps[k]:S.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ee.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ee.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ut),I.pixelStorei(I.UNPACK_SKIP_ROWS,mt),S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,Mt,St,tt,ht,xt,jt,Ee.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,Mt,St,Ee.width,Ee.height,xt,Ee.data):I.texSubImage2D(I.TEXTURE_2D,k,Mt,St,xt,jt,Ee),I.pixelStorei(I.UNPACK_ROW_LENGTH,oe),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),I.pixelStorei(I.UNPACK_SKIP_ROWS,Kt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,_t),k===0&&U.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),yt.unbindTexture()},this.copyTextureToTexture3D=function(S,U,N=null,O=null,k=0){S.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),N=arguments[0]||null,O=arguments[1]||null,S=arguments[2],U=arguments[3],k=arguments[4]||0);let tt,ht,ut,mt,Mt,St,xt,jt,oe;const le=S.isCompressedTexture?S.mipmaps[k]:S.image;N!==null?(tt=N.max.x-N.min.x,ht=N.max.y-N.min.y,ut=N.max.z-N.min.z,mt=N.min.x,Mt=N.min.y,St=N.min.z):(tt=le.width,ht=le.height,ut=le.depth,mt=0,Mt=0,St=0),O!==null?(xt=O.x,jt=O.y,oe=O.z):(xt=0,jt=0,oe=0);const Ue=ot.convert(U.format),Kt=ot.convert(U.type);let _t;if(U.isData3DTexture)Pt.setTexture3D(U,0),_t=I.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)Pt.setTexture2DArray(U,0),_t=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,U.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,U.unpackAlignment);const Ee=I.getParameter(I.UNPACK_ROW_LENGTH),ee=I.getParameter(I.UNPACK_IMAGE_HEIGHT),en=I.getParameter(I.UNPACK_SKIP_PIXELS),Zi=I.getParameter(I.UNPACK_SKIP_ROWS),Un=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,mt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Mt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,St),S.isDataTexture||S.isData3DTexture?I.texSubImage3D(_t,k,xt,jt,oe,tt,ht,ut,Ue,Kt,le.data):U.isCompressedArrayTexture?I.compressedTexSubImage3D(_t,k,xt,jt,oe,tt,ht,ut,Ue,le.data):I.texSubImage3D(_t,k,xt,jt,oe,tt,ht,ut,Ue,Kt,le),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ee),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ee),I.pixelStorei(I.UNPACK_SKIP_PIXELS,en),I.pixelStorei(I.UNPACK_SKIP_ROWS,Zi),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Un),k===0&&U.generateMipmaps&&I.generateMipmap(_t),yt.unbindTexture()},this.initRenderTarget=function(S){Ft.get(S).__webglFramebuffer===void 0&&Pt.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?Pt.setTextureCube(S,0):S.isData3DTexture?Pt.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?Pt.setTexture2DArray(S,0):Pt.setTexture2D(S,0),yt.unbindTexture()},this.resetState=function(){D=0,E=0,R=null,yt.reset(),kt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=t===aa?"display-p3":"srgb",e.unpackColorSpace=Jt.workingColorSpace===Ys?"display-p3":"srgb"}}class da{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Rt(t),this.near=e,this.far=n}clone(){return new da(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Zm extends ae{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Eg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zr,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Ye()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}get updateRange(){return la("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ye()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ye()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ae=new T;class ic{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyMatrix4(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.applyNormalMatrix(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ae.fromBufferAttribute(this,e),Ae.transformDirection(t),this.setXYZ(e,Ae.x,Ae.y,Ae.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Xe(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$t(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Xe(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Xe(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Xe(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Xe(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$t(e,this.array),n=$t(n,this.array),s=$t(s,this.array),r=$t(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new De(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ic(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Yo=new T,jo=new ne,Ko=new ne,Jm=new T,$o=new Ot,ys=new T,kr=new pn,Zo=new Ot,Nr=new js;class Ag extends pt{constructor(t,e){super(t,e),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Ca,this.bindMatrix=new Ot,this.bindMatrixInverse=new Ot,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const t=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ln),this.boundingBox.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ys),this.boundingBox.expandByPoint(ys)}computeBoundingSphere(){const t=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pn),this.boundingSphere.makeEmpty();const e=t.getAttribute("position");for(let n=0;n<e.count;n++)this.getVertexPosition(n,ys),this.boundingSphere.expandByPoint(ys)}copy(t,e){return super.copy(t,e),this.bindMode=t.bindMode,this.bindMatrix.copy(t.bindMatrix),this.bindMatrixInverse.copy(t.bindMatrixInverse),this.skeleton=t.skeleton,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}raycast(t,e){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),kr.copy(this.boundingSphere),kr.applyMatrix4(s),t.ray.intersectsSphere(kr)!==!1&&(Zo.copy(s).invert(),Nr.copy(t.ray).applyMatrix4(Zo),!(this.boundingBox!==null&&Nr.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(t,e,Nr)))}getVertexPosition(t,e){return super.getVertexPosition(t,e),this.applyBoneTransform(t,e),e}bind(t,e){this.skeleton=t,e===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),e=this.matrixWorld),this.bindMatrix.copy(e),this.bindMatrixInverse.copy(e).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const t=new ne,e=this.geometry.attributes.skinWeight;for(let n=0,s=e.count;n<s;n++){t.fromBufferAttribute(e,n);const r=1/t.manhattanLength();r!==1/0?t.multiplyScalar(r):t.set(1,0,0,0),e.setXYZW(n,t.x,t.y,t.z,t.w)}}updateMatrixWorld(t){super.updateMatrixWorld(t),this.bindMode===Ca?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===th?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(t,e){const n=this.skeleton,s=this.geometry;jo.fromBufferAttribute(s.attributes.skinIndex,t),Ko.fromBufferAttribute(s.attributes.skinWeight,t),Yo.copy(e).applyMatrix4(this.bindMatrix),e.set(0,0,0);for(let r=0;r<4;r++){const a=Ko.getComponent(r);if(a!==0){const o=jo.getComponent(r);$o.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),e.addScaledVector(Jm.copy(Yo).applyMatrix4($o),a)}}return e.applyMatrix4(this.bindMatrixInverse)}}class Qm extends ae{constructor(){super(),this.isBone=!0,this.type="Bone"}}class sc extends Se{constructor(t=null,e=1,n=1,s,r,a,o,l,c=Ce,h=Ce,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Jo=new Ot,t0=new Ot;class rc{constructor(t=[],e=[]){this.uuid=Ye(),this.bones=t.slice(0),this.boneInverses=e,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const t=this.bones,e=this.boneInverses;if(this.boneMatrices=new Float32Array(t.length*16),e.length===0)this.calculateInverses();else if(t.length!==e.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new Ot)}}calculateInverses(){this.boneInverses.length=0;for(let t=0,e=this.bones.length;t<e;t++){const n=new Ot;this.bones[t]&&n.copy(this.bones[t].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&n.matrixWorld.copy(this.boneInverses[t]).invert()}for(let t=0,e=this.bones.length;t<e;t++){const n=this.bones[t];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const t=this.bones,e=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,a=t.length;r<a;r++){const o=t[r]?t[r].matrixWorld:t0;Jo.multiplyMatrices(o,e[r]),Jo.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new rc(this.bones,this.boneInverses)}computeBoneTexture(){let t=Math.sqrt(this.bones.length*4);t=Math.ceil(t/4)*4,t=Math.max(t,4);const e=new Float32Array(t*t*4);e.set(this.boneMatrices);const n=new sc(e,t,t,qe,Qe);return n.needsUpdate=!0,this.boneMatrices=e,this.boneTexture=n,this}getBoneByName(t){for(let e=0,n=this.bones.length;e<n;e++){const s=this.bones[e];if(s.name===t)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(t,e){this.uuid=t.uuid;for(let n=0,s=t.bones.length;n<s;n++){const r=t.bones[n];let a=e[r];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),a=new Qm),this.bones.push(a),this.boneInverses.push(new Ot().fromArray(t.boneInverses[n]))}return this.init(),this}toJSON(){const t={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};t.uuid=this.uuid;const e=this.bones,n=this.boneInverses;for(let s=0,r=e.length;s<r;s++){const a=e[s];t.bones.push(a.uuid);const o=n[s];t.boneInverses.push(o.toArray())}return t}}class Qo extends De{constructor(t,e,n,s=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){const t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}}const pi=new Ot,tl=new Ot,Ms=[],el=new Ln,e0=new Ot,Oi=new pt,Bi=new pn;class n0 extends pt{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Qo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,e0)}computeBoundingBox(){const t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Ln),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pi),el.copy(t.boundingBox).applyMatrix4(pi),this.boundingBox.union(el)}computeBoundingSphere(){const t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new pn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,pi),Bi.copy(t.boundingSphere).applyMatrix4(pi),this.boundingSphere.union(Bi)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){const n=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=t*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(t,e){const n=this.matrixWorld,s=this.count;if(Oi.geometry=this.geometry,Oi.material=this.material,Oi.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Bi.copy(this.boundingSphere),Bi.applyMatrix4(n),t.ray.intersectsSphere(Bi)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pi),tl.multiplyMatrices(n,pi),Oi.matrixWorld=tl,Oi.raycast(t,Ms);for(let a=0,o=Ms.length;a<o;a++){const l=Ms[a];l.instanceId=r,l.object=this,e.push(l)}Ms.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Qo(new Float32Array(this.instanceMatrix.count*3),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){const n=e.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new sc(new Float32Array(s*this.count),s,this.count,Ul,Qe));const r=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;r[l]=o,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class i0 extends In{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Rt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Bs=new T,zs=new T,nl=new Ot,zi=new js,Ss=new pn,Fr=new T,il=new T;class ac extends ae{constructor(t=new Fe,e=new i0){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Bs.fromBufferAttribute(e,s-1),zs.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Bs.distanceTo(zs);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ss.copy(n.boundingSphere),Ss.applyMatrix4(s),Ss.radius+=r,t.ray.intersectsSphere(Ss)===!1)return;nl.copy(s).invert(),zi.copy(t.ray).applyMatrix4(nl);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){const f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){const m=h.getX(_),v=h.getX(_+1),y=bs(this,t,zi,l,m,v);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),p=h.getX(f),m=bs(this,t,zi,l,_,p);m&&e.push(m)}}else{const f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){const m=bs(this,t,zi,l,_,_+1);m&&e.push(m)}if(this.isLineLoop){const _=bs(this,t,zi,l,g-1,f);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function bs(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Bs.fromBufferAttribute(a,s),zs.fromBufferAttribute(a,r),e.distanceSqToSegment(Bs,zs,Fr,il)>n)return;Fr.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Fr);if(!(l<t.near||l>t.far))return{distance:l,point:il.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,object:i}}const sl=new T,rl=new T;class Rg extends ac{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)sl.fromBufferAttribute(e,s),rl.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+sl.distanceTo(rl);t.setAttribute("lineDistance",new ye(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Cg extends ac{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class oc extends In{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Rt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const al=new Ot,Qr=new js,ws=new pn,Ts=new T;class s0 extends ae{constructor(t=new Fe,e=new oc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ws.copy(n.boundingSphere),ws.applyMatrix4(s),ws.radius+=r,t.ray.intersectsSphere(ws)===!1)return;al.copy(s).invert(),Qr.copy(t.ray).applyMatrix4(al);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){const u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,_=f;g<_;g++){const p=c.getX(g);Ts.fromBufferAttribute(d,p),ol(Ts,p,l,s,t,e,this)}}else{const u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)Ts.fromBufferAttribute(d,g),ol(Ts,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ol(i,t,e,n,s,r,a){const o=Qr.distanceSqToPoint(i);if(o<e){const l=new T;Qr.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,object:a})}}class r0 extends Se{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ua extends Fe{constructor(t=1,e=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:s},e=Math.max(3,e);const r=[],a=[],o=[],l=[],c=new T,h=new Ct;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){const f=n+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ye(a,3)),this.setAttribute("normal",new ye(o,3)),this.setAttribute("uv",new ye(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ua(t.radius,t.segments,t.thetaStart,t.thetaLength)}}class ce extends Fe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],d=[],u=[],f=[];let g=0;const _=[],p=n/2;let m=0;v(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new ye(d,3)),this.setAttribute("normal",new ye(u,3)),this.setAttribute("uv",new ye(f,2));function v(){const w=new T,D=new T;let E=0;const R=(e-t)/n;for(let C=0;C<=r;C++){const b=[],x=C/r,P=x*(e-t)+t;for(let B=0;B<=s;B++){const F=B/s,V=F*l+o,q=Math.sin(V),H=Math.cos(V);D.x=P*q,D.y=-x*n+p,D.z=P*H,d.push(D.x,D.y,D.z),w.set(q,R,H).normalize(),u.push(w.x,w.y,w.z),f.push(F,1-x),b.push(g++)}_.push(b)}for(let C=0;C<s;C++)for(let b=0;b<r;b++){const x=_[b][C],P=_[b+1][C],B=_[b+1][C+1],F=_[b][C+1];h.push(x,P,F),h.push(P,B,F),E+=6}c.addGroup(m,E,0),m+=E}function y(w){const D=g,E=new Ct,R=new T;let C=0;const b=w===!0?t:e,x=w===!0?1:-1;for(let B=1;B<=s;B++)d.push(0,p*x,0),u.push(0,x,0),f.push(.5,.5),g++;const P=g;for(let B=0;B<=s;B++){const V=B/s*l+o,q=Math.cos(V),H=Math.sin(V);R.x=b*H,R.y=p*x,R.z=b*q,d.push(R.x,R.y,R.z),u.push(0,x,0),E.x=q*.5+.5,E.y=H*.5*x+.5,f.push(E.x,E.y),g++}for(let B=0;B<s;B++){const F=D+B,V=P+B;w===!0?h.push(V,V+1,F):h.push(V+1,V,F),C+=3}c.addGroup(m,C,w===!0?1:2),m+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ce(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class fa extends ce{constructor(t=1,e=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new fa(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class pa extends Fe{constructor(t=[],e=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:s};const r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(r.slice(),3)),this.setAttribute("uv",new ye(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){const y=new T,w=new T,D=new T;for(let E=0;E<e.length;E+=3)f(e[E+0],y),f(e[E+1],w),f(e[E+2],D),l(y,w,D,v)}function l(v,y,w,D){const E=D+1,R=[];for(let C=0;C<=E;C++){R[C]=[];const b=v.clone().lerp(w,C/E),x=y.clone().lerp(w,C/E),P=E-C;for(let B=0;B<=P;B++)B===0&&C===E?R[C][B]=b:R[C][B]=b.clone().lerp(x,B/P)}for(let C=0;C<E;C++)for(let b=0;b<2*(E-C)-1;b++){const x=Math.floor(b/2);b%2===0?(u(R[C][x+1]),u(R[C+1][x]),u(R[C][x])):(u(R[C][x+1]),u(R[C+1][x+1]),u(R[C+1][x]))}}function c(v){const y=new T;for(let w=0;w<r.length;w+=3)y.x=r[w+0],y.y=r[w+1],y.z=r[w+2],y.normalize().multiplyScalar(v),r[w+0]=y.x,r[w+1]=y.y,r[w+2]=y.z}function h(){const v=new T;for(let y=0;y<r.length;y+=3){v.x=r[y+0],v.y=r[y+1],v.z=r[y+2];const w=p(v)/2/Math.PI+.5,D=m(v)/Math.PI+.5;a.push(w,1-D)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){const y=a[v+0],w=a[v+2],D=a[v+4],E=Math.max(y,w,D),R=Math.min(y,w,D);E>.9&&R<.1&&(y<.2&&(a[v+0]+=1),w<.2&&(a[v+2]+=1),D<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,y){const w=v*3;y.x=t[w+0],y.y=t[w+1],y.z=t[w+2]}function g(){const v=new T,y=new T,w=new T,D=new T,E=new Ct,R=new Ct,C=new Ct;for(let b=0,x=0;b<r.length;b+=9,x+=6){v.set(r[b+0],r[b+1],r[b+2]),y.set(r[b+3],r[b+4],r[b+5]),w.set(r[b+6],r[b+7],r[b+8]),E.set(a[x+0],a[x+1]),R.set(a[x+2],a[x+3]),C.set(a[x+4],a[x+5]),D.copy(v).add(y).add(w).divideScalar(3);const P=p(D);_(E,x+0,v,P),_(R,x+2,y,P),_(C,x+4,w,P)}}function _(v,y,w,D){D<0&&v.x===1&&(a[y]=v.x-1),w.x===0&&w.z===0&&(a[y]=D/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new pa(t.vertices,t.indices,t.radius,t.details)}}class ma extends pa{constructor(t=1,e=0){const n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,t,e),this.type="DodecahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new ma(t.radius,t.detail)}}class a0 extends In{constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Rt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Pg extends a0{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ct(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Te(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Rt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Rt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Rt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class Pe extends In{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Rt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ra,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=ia,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}function Es(i,t,e){return!i||!e&&i.constructor===t?i:typeof t.BYTES_PER_ELEMENT=="number"?new t(i):Array.prototype.slice.call(i)}function o0(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function l0(i){function t(s,r){return i[s]-i[r]}const e=i.length,n=new Array(e);for(let s=0;s!==e;++s)n[s]=s;return n.sort(t),n}function ll(i,t,e){const n=i.length,s=new i.constructor(n);for(let r=0,a=0;a!==n;++r){const o=e[r]*t;for(let l=0;l!==t;++l)s[a++]=i[o+l]}return s}function lc(i,t,e,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let a=r[n];if(a!==void 0)if(Array.isArray(a))do a=r[n],a!==void 0&&(t.push(r.time),e.push.apply(e,a)),r=i[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[n],a!==void 0&&(t.push(r.time),a.toArray(e,e.length)),r=i[s++];while(r!==void 0);else do a=r[n],a!==void 0&&(t.push(r.time),e.push(a)),r=i[s++];while(r!==void 0)}class $s{constructor(t,e,n,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){const e=this.parameterPositions;let n=this._cachedIndex,s=e[n],r=e[n-1];t:{e:{let a;n:{i:if(!(t<s)){for(let o=n+2;;){if(s===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=e[++n],t<s)break e}a=e.length;break n}if(!(t>=r)){const o=e[1];t<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=e[--n-1],t>=r)break e}a=n,n=0;break n}break t}for(;n<a;){const o=n+a>>>1;t<e[o]?a=o:n=o+1}if(s=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){const e=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=n[r+a];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class c0 extends $s{constructor(t,e,n,s){super(t,e,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:_i,endingEnd:_i}}intervalChanged_(t,e,n){const s=this.parameterPositions;let r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vi:r=t,o=2*e-n;break;case Us:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case vi:a=t,l=2*n-e;break;case Us:a=1,l=n+s[1]-s[0];break;default:a=t-1,l=e}const c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-e)/(s-e),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,v=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,y=(-1-f)*p+(1.5+f)*_+.5*g,w=f*p-f*_;for(let D=0;D!==o;++D)r[D]=m*a[h+D]+v*a[c+D]+y*a[l+D]+w*a[d+D];return r}}class cc extends $s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(n-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}}class h0 extends $s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t){return this.copySampleValue_(t-1)}}class tn{constructor(t,e,n,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Es(e,this.TimeBufferType),this.values=Es(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){const e=t.constructor;let n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Es(t.times,Array),values:Es(t.values,Array)};const s=t.getInterpolation();s!==t.DefaultInterpolation&&(n.interpolation=s)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new h0(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new cc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new c0(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case Ds:e=this.InterpolantFactoryMethodDiscrete;break;case $r:e=this.InterpolantFactoryMethodLinear;break;case cr:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ds;case this.InterpolantFactoryMethodLinear:return $r;case this.InterpolantFactoryMethodSmooth:return cr}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]+=t}return this}scale(t){if(t!==1){const e=this.times;for(let n=0,s=e.length;n!==s;++n)e[n]*=t}return this}trim(t,e){const n=this.times,s=n.length;let r=0,a=s-1;for(;r!==s&&n[r]<t;)++r;for(;a!==-1&&n[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);const o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0;const e=this.getValueSize();e-Math.floor(e)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),t=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&o0(s))for(let o=0,l=s.length;o!==l;++o){const c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){const t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===cr,r=t.length-1;let a=1;for(let o=1;o<r;++o){let l=!1;const c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{const d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){const _=e[d+g];if(_!==e[u+g]||_!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];const d=o*n,u=a*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){const t=this.times.slice(),e=this.values.slice(),n=this.constructor,s=new n(this.name,t,e);return s.createInterpolant=this.createInterpolant,s}}tn.prototype.TimeBufferType=Float32Array;tn.prototype.ValueBufferType=Float32Array;tn.prototype.DefaultInterpolation=$r;class Ii extends tn{constructor(t,e,n){super(t,e,n)}}Ii.prototype.ValueTypeName="bool";Ii.prototype.ValueBufferType=Array;Ii.prototype.DefaultInterpolation=Ds;Ii.prototype.InterpolantFactoryMethodLinear=void 0;Ii.prototype.InterpolantFactoryMethodSmooth=void 0;class hc extends tn{}hc.prototype.ValueTypeName="color";class Vs extends tn{}Vs.prototype.ValueTypeName="number";class d0 extends $s{constructor(t,e,n,s){super(t,e,n,s)}interpolate_(t,e,n,s){const r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-e)/(s-e);let c=t*o;for(let h=c+o;c!==h;c+=4)fn.slerpFlat(r,0,a,c-o,a,c,l);return r}}class Zs extends tn{InterpolantFactoryMethodLinear(t){return new d0(this.times,this.values,this.getValueSize(),t)}}Zs.prototype.ValueTypeName="quaternion";Zs.prototype.InterpolantFactoryMethodSmooth=void 0;class Di extends tn{constructor(t,e,n){super(t,e,n)}}Di.prototype.ValueTypeName="string";Di.prototype.ValueBufferType=Array;Di.prototype.DefaultInterpolation=Ds;Di.prototype.InterpolantFactoryMethodLinear=void 0;Di.prototype.InterpolantFactoryMethodSmooth=void 0;class Hs extends tn{}Hs.prototype.ValueTypeName="vector";class cl{constructor(t="",e=-1,n=[],s=sa){this.name=t,this.tracks=n,this.duration=e,this.blendMode=s,this.uuid=Ye(),this.duration<0&&this.resetDuration()}static parse(t){const e=[],n=t.tracks,s=1/(t.fps||1);for(let a=0,o=n.length;a!==o;++a)e.push(f0(n[a]).scale(s));const r=new this(t.name,t.duration,e,t.blendMode);return r.uuid=t.uuid,r}static toJSON(t){const e=[],n=t.tracks,s={name:t.name,duration:t.duration,tracks:e,uuid:t.uuid,blendMode:t.blendMode};for(let r=0,a=n.length;r!==a;++r)e.push(tn.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(t,e,n,s){const r=e.length,a=[];for(let o=0;o<r;o++){let l=[],c=[];l.push((o+r-1)%r,o,(o+1)%r),c.push(0,1,0);const h=l0(l);l=ll(l,1,h),c=ll(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),a.push(new Vs(".morphTargetInfluences["+e[o].name+"]",l,c).scale(1/n))}return new this(t,-1,a)}static findByName(t,e){let n=t;if(!Array.isArray(t)){const s=t;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===e)return n[s];return null}static CreateClipsFromMorphTargetSequences(t,e,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,l=t.length;o<l;o++){const c=t[o],h=c.name.match(r);if(h&&h.length>1){const d=h[1];let u=s[d];u||(s[d]=u=[]),u.push(c)}}const a=[];for(const o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],e,n));return a}static parseAnimation(t,e){if(!t)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(d,u,f,g,_){if(f.length!==0){const p=[],m=[];lc(f,p,m,g),p.length!==0&&_.push(new d(u,p,m))}},s=[],r=t.name||"default",a=t.fps||30,o=t.blendMode;let l=t.length||-1;const c=t.hierarchy||[];for(let d=0;d<c.length;d++){const u=c[d].keys;if(!(!u||u.length===0))if(u[0].morphTargets){const f={};let g;for(g=0;g<u.length;g++)if(u[g].morphTargets)for(let _=0;_<u[g].morphTargets.length;_++)f[u[g].morphTargets[_]]=-1;for(const _ in f){const p=[],m=[];for(let v=0;v!==u[g].morphTargets.length;++v){const y=u[g];p.push(y.time),m.push(y.morphTarget===_?1:0)}s.push(new Vs(".morphTargetInfluence["+_+"]",p,m))}l=f.length*a}else{const f=".bones["+e[d].name+"]";n(Hs,f+".position",u,"pos",s),n(Zs,f+".quaternion",u,"rot",s),n(Hs,f+".scale",u,"scl",s)}}return s.length===0?null:new this(r,l,s,o)}resetDuration(){const t=this.tracks;let e=0;for(let n=0,s=t.length;n!==s;++n){const r=this.tracks[n];e=Math.max(e,r.times[r.times.length-1])}return this.duration=e,this}trim(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].trim(0,this.duration);return this}validate(){let t=!0;for(let e=0;e<this.tracks.length;e++)t=t&&this.tracks[e].validate();return t}optimize(){for(let t=0;t<this.tracks.length;t++)this.tracks[t].optimize();return this}clone(){const t=[];for(let e=0;e<this.tracks.length;e++)t.push(this.tracks[e].clone());return new this.constructor(this.name,this.duration,t,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function u0(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Vs;case"vector":case"vector2":case"vector3":case"vector4":return Hs;case"color":return hc;case"quaternion":return Zs;case"bool":case"boolean":return Ii;case"string":return Di}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function f0(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const t=u0(i.type);if(i.times===void 0){const e=[],n=[];lc(i.keys,e,n,"value"),i.times=e,i.values=n}return t.parse!==void 0?t.parse(i):new t(i.name,i.times,i.values,i.interpolation)}const wn={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class p0{constructor(t,e,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){const f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null}}}const m0=new p0;class ji{constructor(t){this.manager=t!==void 0?t:m0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(s,r){n.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}ji.DEFAULT_MATERIAL_NAME="__DEFAULT";const ln={};class g0 extends Error{constructor(t,e){super(t),this.response=e}}class Lg extends ji{constructor(t){super(t)}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=wn.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(ln[t]!==void 0){ln[t].push({onLoad:e,onProgress:n,onError:s});return}ln[t]=[],ln[t].push({onLoad:e,onProgress:n,onError:s});const a=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=ln[t],d=c.body.getReader(),u=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0;let _=0;const p=new ReadableStream({start(m){v();function v(){d.read().then(({done:y,value:w})=>{if(y)m.close();else{_+=w.byteLength;const D=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:f});for(let E=0,R=h.length;E<R;E++){const C=h[E];C.onProgress&&C.onProgress(D)}m.enqueue(w),v()}},y=>{m.error(y)})}}});return new Response(p)}else throw new g0(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return c.json();default:if(o===void 0)return c.text();{const d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return c.arrayBuffer().then(g=>f.decode(g))}}}).then(c=>{wn.add(t,c);const h=ln[t];delete ln[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=ln[t];if(h===void 0)throw this.manager.itemError(t),c;delete ln[t];for(let d=0,u=h.length;d<u;d++){const f=h[d];f.onError&&f.onError(c)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class _0 extends ji{constructor(t){super(t)}load(t,e,n,s){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=wn.get(t);if(a!==void 0)return r.manager.itemStart(t),setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a;const o=Yi("img");function l(){h(),wn.add(t,this),e&&e(this),r.manager.itemEnd(t)}function c(d){h(),s&&s(d),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),r.manager.itemStart(t),o.src=t,o}}class Ig extends ji{constructor(t){super(t)}load(t,e,n,s){const r=new Se,a=new _0(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(t,function(o){r.image=o,r.needsUpdate=!0,e!==void 0&&e(r)},n,s),r}}class Js extends ae{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class v0 extends Js{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Rt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Or=new Ot,hl=new T,dl=new T;class ga{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Ot,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ca,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new ne(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;hl.setFromMatrixPosition(t.matrixWorld),e.position.copy(hl),dl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(dl),e.updateMatrixWorld(),Or.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Or),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Or)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class x0 extends ga{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ri*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class y0 extends Js{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new x0}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}const ul=new Ot,Vi=new T,Br=new T;class M0 extends ga{constructor(){super(new Le(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new ne(2,1,1,1),new ne(0,1,1,1),new ne(3,1,1,1),new ne(1,1,1,1),new ne(3,0,1,1),new ne(1,0,1,1)],this._cubeDirections=[new T(1,0,0),new T(-1,0,0),new T(0,0,1),new T(0,0,-1),new T(0,1,0),new T(0,-1,0)],this._cubeUps=[new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,1,0),new T(0,0,1),new T(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Vi.setFromMatrixPosition(t.matrixWorld),n.position.copy(Vi),Br.copy(n.position),Br.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Br),n.updateMatrixWorld(),s.makeTranslation(-Vi.x,-Vi.y,-Vi.z),ul.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ul)}}class Gs extends Js{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new M0}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class S0 extends ga{constructor(){super(new $l(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class b0 extends Js{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ae.DEFAULT_UP),this.updateMatrix(),this.target=new ae,this.shadow=new S0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Dg{static decodeText(t){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(t);let e="";for(let n=0,s=t.length;n<s;n++)e+=String.fromCharCode(t[n]);try{return decodeURIComponent(escape(e))}catch{return e}}static extractUrlBase(t){const e=t.lastIndexOf("/");return e===-1?"./":t.slice(0,e+1)}static resolveURL(t,e){return typeof t!="string"||t===""?"":(/^https?:\/\//i.test(e)&&/^\//.test(t)&&(e=e.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(t)||/^data:.*,.*$/i.test(t)||/^blob:.*$/i.test(t)?t:e+t)}}class Ug extends ji{constructor(t){super(t),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(t){return this.options=t,this}load(t,e,n,s){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=this,a=wn.get(t);if(a!==void 0){if(r.manager.itemStart(t),a.then){a.then(c=>{e&&e(c),r.manager.itemEnd(t)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){e&&e(a),r.manager.itemEnd(t)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(t,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return wn.add(t,c),e&&e(c),r.manager.itemEnd(t),c}).catch(function(c){s&&s(c),wn.remove(t),r.manager.itemError(t),r.manager.itemEnd(t)});wn.add(t,l),r.manager.itemStart(t)}}class w0{constructor(t,e,n){this.binding=t,this.valueSize=n;let s,r,a;switch(e){case"quaternion":s=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":s=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:s=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=s,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(t,e){const n=this.buffer,s=this.valueSize,r=t*s+s;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==s;++o)n[r+o]=n[o];a=e}else{a+=e;const o=e/a;this._mixBufferRegion(n,r,0,o,s)}this.cumulativeWeight=a}accumulateAdditive(t){const e=this.buffer,n=this.valueSize,s=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(e,s,0,t,n),this.cumulativeWeightAdditive+=t}apply(t){const e=this.valueSize,n=this.buffer,s=t*e+e,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=e*this._origIndex;this._mixBufferRegion(n,s,l,1-r,e)}a>0&&this._mixBufferRegionAdditive(n,s,this._addIndex*e,1,e);for(let l=e,c=e+e;l!==c;++l)if(n[l]!==n[l+e]){o.setValue(n,s);break}}saveOriginalState(){const t=this.binding,e=this.buffer,n=this.valueSize,s=n*this._origIndex;t.getValue(e,s);for(let r=n,a=s;r!==a;++r)e[r]=e[s+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const t=this.valueSize*3;this.binding.setValue(this.buffer,t)}_setAdditiveIdentityNumeric(){const t=this._addIndex*this.valueSize,e=t+this.valueSize;for(let n=t;n<e;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const t=this._origIndex*this.valueSize,e=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[e+n]=this.buffer[t+n]}_select(t,e,n,s,r){if(s>=.5)for(let a=0;a!==r;++a)t[e+a]=t[n+a]}_slerp(t,e,n,s){fn.slerpFlat(t,e,t,e,t,n,s)}_slerpAdditive(t,e,n,s,r){const a=this._workIndex*r;fn.multiplyQuaternionsFlat(t,a,t,e,t,n),fn.slerpFlat(t,e,t,e,t,a,s)}_lerp(t,e,n,s,r){const a=1-s;for(let o=0;o!==r;++o){const l=e+o;t[l]=t[l]*a+t[n+o]*s}}_lerpAdditive(t,e,n,s,r){for(let a=0;a!==r;++a){const o=e+a;t[o]=t[o]+t[n+a]*s}}}const _a="\\[\\]\\.:\\/",T0=new RegExp("["+_a+"]","g"),va="[^"+_a+"]",E0="[^"+_a.replace("\\.","")+"]",A0=/((?:WC+[\/:])*)/.source.replace("WC",va),R0=/(WCOD+)?/.source.replace("WCOD",E0),C0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",va),P0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",va),L0=new RegExp("^"+A0+R0+C0+P0+"$"),I0=["material","materials","bones","map"];class D0{constructor(t,e,n){const s=n||Zt.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(t,e)}setValue(t,e){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(t,e)}bind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){const t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}}class Zt{constructor(t,e,n){this.path=e,this.parsedPath=n||Zt.parseTrackName(e),this.node=Zt.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new Zt.Composite(t,e,n):new Zt(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(T0,"")}static parseTrackName(t){const e=L0.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);const n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);I0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){const n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){const n=function(r){for(let a=0;a<r.length;a++){const o=r[a];if(o.name===e||o.uuid===e)return o;const l=n(o.children);if(l)return l}return null},s=n(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)t[e++]=n[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node;const e=this.parsedPath,n=e.objectName,s=e.propertyName;let r=e.propertyIndex;if(t||(t=Zt.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}const a=t[s];if(a===void 0){const c=e.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:t.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Zt.Composite=D0;Zt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Zt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Zt.prototype.GetterByBindingType=[Zt.prototype._getValue_direct,Zt.prototype._getValue_array,Zt.prototype._getValue_arrayElement,Zt.prototype._getValue_toArray];Zt.prototype.SetterByBindingTypeAndVersioning=[[Zt.prototype._setValue_direct,Zt.prototype._setValue_direct_setNeedsUpdate,Zt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_array,Zt.prototype._setValue_array_setNeedsUpdate,Zt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_arrayElement,Zt.prototype._setValue_arrayElement_setNeedsUpdate,Zt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Zt.prototype._setValue_fromArray,Zt.prototype._setValue_fromArray_setNeedsUpdate,Zt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class U0{constructor(t,e,n=null,s=e.blendMode){this._mixer=t,this._clip=e,this._localRoot=n,this.blendMode=s;const r=e.tracks,a=r.length,o=new Array(a),l={endingStart:_i,endingEnd:_i};for(let c=0;c!==a;++c){const h=r[c].createInterpolant(null);o[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=uh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(t){return this._startTime=t,this}setLoop(t,e){return this.loop=t,this.repetitions=e,this}setEffectiveWeight(t){return this.weight=t,this._effectiveWeight=this.enabled?t:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(t){return this._scheduleFading(t,0,1)}fadeOut(t){return this._scheduleFading(t,1,0)}crossFadeFrom(t,e,n){if(t.fadeOut(e),this.fadeIn(e),n){const s=this._clip.duration,r=t._clip.duration,a=r/s,o=s/r;t.warp(1,a,e),this.warp(o,1,e)}return this}crossFadeTo(t,e,n){return t.crossFadeFrom(this,e,n)}stopFading(){const t=this._weightInterpolant;return t!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}setEffectiveTimeScale(t){return this.timeScale=t,this._effectiveTimeScale=this.paused?0:t,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(t){return this.timeScale=this._clip.duration/t,this.stopWarping()}syncWith(t){return this.time=t.time,this.timeScale=t.timeScale,this.stopWarping()}halt(t){return this.warp(this._effectiveTimeScale,0,t)}warp(t,e,n){const s=this._mixer,r=s.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=s._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=r,l[1]=r+n,c[0]=t/a,c[1]=e/a,this}stopWarping(){const t=this._timeScaleInterpolant;return t!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(t)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(t,e,n,s){if(!this.enabled){this._updateWeight(t);return}const r=this._startTime;if(r!==null){const l=(t-r)*n;l<0||n===0?e=0:(this._startTime=null,e=n*l)}e*=this._updateTimeScale(t);const a=this._updateTime(e),o=this._updateWeight(t);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case ph:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulateAdditive(o);break;case sa:default:for(let h=0,d=l.length;h!==d;++h)l[h].evaluate(a),c[h].accumulate(s,o)}}}_updateWeight(t){let e=0;if(this.enabled){e=this.weight;const n=this._weightInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopFading(),s===0&&(this.enabled=!1))}}return this._effectiveWeight=e,e}_updateTimeScale(t){let e=0;if(!this.paused){e=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const s=n.evaluate(t)[0];e*=s,t>n.parameterPositions[1]&&(this.stopWarping(),e===0?this.paused=!0:this.timeScale=e)}}return this._effectiveTimeScale=e,e}_updateTime(t){const e=this._clip.duration,n=this.loop;let s=this.time+t,r=this._loopCount;const a=n===fh;if(t===0)return r===-1?s:a&&(r&1)===1?e-s:s;if(n===dh){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));t:{if(s>=e)s=e;else if(s<0)s=0;else{this.time=s;break t}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t<0?-1:1})}}else{if(r===-1&&(t>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),s>=e||s<0){const o=Math.floor(s/e);s-=e*o,r+=Math.abs(o);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,s=t>0?e:0,this.time=s,this._mixer.dispatchEvent({type:"finished",action:this,direction:t>0?1:-1});else{if(l===1){const c=t<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=s,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=s;if(a&&(r&1)===1)return e-s}return s}_setEndings(t,e,n){const s=this._interpolantSettings;n?(s.endingStart=vi,s.endingEnd=vi):(t?s.endingStart=this.zeroSlopeAtStart?vi:_i:s.endingStart=Us,e?s.endingEnd=this.zeroSlopeAtEnd?vi:_i:s.endingEnd=Us)}_scheduleFading(t,e,n){const s=this._mixer,r=s.time;let a=this._weightInterpolant;a===null&&(a=s._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=r,l[0]=e,o[1]=r+t,l[1]=n,this}}const k0=new Float32Array(1);class kg extends $n{constructor(t){super(),this._root=t,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(t,e){const n=t._localRoot||this._root,s=t._clip.tracks,r=s.length,a=t._propertyBindings,o=t._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let d=0;d!==r;++d){const u=s[d],f=u.name;let g=h[f];if(g!==void 0)++g.referenceCount,a[d]=g;else{if(g=a[d],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,l,f));continue}const _=e&&e._propertyBindings[d].binding.parsedPath;g=new w0(Zt.create(n,f,_),u.ValueTypeName,u.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,l,f),a[d]=g}o[d].resultBuffer=g.buffer}}_activateAction(t){if(!this._isActiveAction(t)){if(t._cacheIndex===null){const n=(t._localRoot||this._root).uuid,s=t._clip.uuid,r=this._actionsByClip[s];this._bindAction(t,r&&r.knownActions[0]),this._addInactiveAction(t,s,n)}const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(t)}}_deactivateAction(t){if(this._isActiveAction(t)){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(t)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const t=this;this.stats={actions:{get total(){return t._actions.length},get inUse(){return t._nActiveActions}},bindings:{get total(){return t._bindings.length},get inUse(){return t._nActiveBindings}},controlInterpolants:{get total(){return t._controlInterpolants.length},get inUse(){return t._nActiveControlInterpolants}}}}_isActiveAction(t){const e=t._cacheIndex;return e!==null&&e<this._nActiveActions}_addInactiveAction(t,e,n){const s=this._actions,r=this._actionsByClip;let a=r[e];if(a===void 0)a={knownActions:[t],actionByRoot:{}},t._byClipCacheIndex=0,r[e]=a;else{const o=a.knownActions;t._byClipCacheIndex=o.length,o.push(t)}t._cacheIndex=s.length,s.push(t),a.actionByRoot[n]=t}_removeInactiveAction(t){const e=this._actions,n=e[e.length-1],s=t._cacheIndex;n._cacheIndex=s,e[s]=n,e.pop(),t._cacheIndex=null;const r=t._clip.uuid,a=this._actionsByClip,o=a[r],l=o.knownActions,c=l[l.length-1],h=t._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),t._byClipCacheIndex=null;const d=o.actionByRoot,u=(t._localRoot||this._root).uuid;delete d[u],l.length===0&&delete a[r],this._removeInactiveBindingsForAction(t)}_removeInactiveBindingsForAction(t){const e=t._propertyBindings;for(let n=0,s=e.length;n!==s;++n){const r=e[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(t){const e=this._actions,n=t._cacheIndex,s=this._nActiveActions++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackAction(t){const e=this._actions,n=t._cacheIndex,s=--this._nActiveActions,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_addInactiveBinding(t,e,n){const s=this._bindingsByRootAndName,r=this._bindings;let a=s[e];a===void 0&&(a={},s[e]=a),a[n]=t,t._cacheIndex=r.length,r.push(t)}_removeInactiveBinding(t){const e=this._bindings,n=t.binding,s=n.rootNode.uuid,r=n.path,a=this._bindingsByRootAndName,o=a[s],l=e[e.length-1],c=t._cacheIndex;l._cacheIndex=c,e[c]=l,e.pop(),delete o[r],Object.keys(o).length===0&&delete a[s]}_lendBinding(t){const e=this._bindings,n=t._cacheIndex,s=this._nActiveBindings++,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_takeBackBinding(t){const e=this._bindings,n=t._cacheIndex,s=--this._nActiveBindings,r=e[s];t._cacheIndex=s,e[s]=t,r._cacheIndex=n,e[n]=r}_lendControlInterpolant(){const t=this._controlInterpolants,e=this._nActiveControlInterpolants++;let n=t[e];return n===void 0&&(n=new cc(new Float32Array(2),new Float32Array(2),1,k0),n.__cacheIndex=e,t[e]=n),n}_takeBackControlInterpolant(t){const e=this._controlInterpolants,n=t.__cacheIndex,s=--this._nActiveControlInterpolants,r=e[s];t.__cacheIndex=s,e[s]=t,r.__cacheIndex=n,e[n]=r}clipAction(t,e,n){const s=e||this._root,r=s.uuid;let a=typeof t=="string"?cl.findByName(s,t):t;const o=a!==null?a.uuid:t,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=sa),l!==void 0){const d=l.actionByRoot[r];if(d!==void 0&&d.blendMode===n)return d;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const h=new U0(this,a,e,n);return this._bindAction(h,c),this._addInactiveAction(h,o,r),h}existingAction(t,e){const n=e||this._root,s=n.uuid,r=typeof t=="string"?cl.findByName(n,t):t,a=r?r.uuid:t,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[s]||null}stopAllAction(){const t=this._actions,e=this._nActiveActions;for(let n=e-1;n>=0;--n)t[n].stop();return this}update(t){t*=this.timeScale;const e=this._actions,n=this._nActiveActions,s=this.time+=t,r=Math.sign(t),a=this._accuIndex^=1;for(let c=0;c!==n;++c)e[c]._update(s,t,r,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(t){this.time=0;for(let e=0;e<this._actions.length;e++)this._actions[e].time=0;return this.update(t)}getRoot(){return this._root}uncacheClip(t){const e=this._actions,n=t.uuid,s=this._actionsByClip,r=s[n];if(r!==void 0){const a=r.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const h=c._cacheIndex,d=e[e.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,d._cacheIndex=h,e[h]=d,e.pop(),this._removeInactiveBindingsForAction(c)}delete s[n]}}uncacheRoot(t){const e=t.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[e];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const s=this._bindingsByRootAndName,r=s[e];if(r!==void 0)for(const a in r){const o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(t,e){const n=this.existingAction(t,e);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:ea}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=ea);const fl="df_settings_v1",zr="df_save_v1",pl="df_unlocked_v1",Vn={easy:{id:"easy",label:"쉬움",dmgTaken:.6,resourceMul:1.5,countMul:.75,detectMul:.85,atkCooldownMul:1.3,healMul:1.25,staggerMul:1.25},normal:{id:"normal",label:"보통",dmgTaken:1,resourceMul:1,countMul:1,detectMul:1,atkCooldownMul:1,healMul:1,staggerMul:1},hard:{id:"hard",label:"어려움",dmgTaken:1.35,resourceMul:.65,countMul:1.3,detectMul:1.2,atkCooldownMul:.8,healMul:.8,staggerMul:.8}},ml={low:{pixelRatio:.66,shadows:!1,maxZombies:18,maxParticles:250,fogMul:.7,lightDist:.7},medium:{pixelRatio:1,shadows:!1,maxZombies:30,maxParticles:600,fogMul:1,lightDist:1},high:{pixelRatio:Math.min(window.devicePixelRatio||1,2),shadows:!0,maxZombies:42,maxParticles:1200,fogMul:1.15,lightDist:1.2}};class N0{constructor(){this.data={sensitivity:1,volMaster:.8,volSfx:1,volMusic:.6,shakeReduce:!1,perf:"medium",fov:75},this.load()}load(){try{const t=localStorage.getItem(fl);t&&Object.assign(this.data,JSON.parse(t))}catch{}}save(){try{localStorage.setItem(fl,JSON.stringify(this.data))}catch{}}get perf(){return ml[this.data.perf]||ml.medium}}class F0{load(){try{const t=localStorage.getItem(zr);return t?JSON.parse(t):null}catch{return null}}save(t){try{localStorage.setItem(zr,JSON.stringify(t))}catch{}}clear(){try{localStorage.removeItem(zr)}catch{}}unlocked(){try{return Math.max(1,parseInt(localStorage.getItem(pl)||"1",10)||1)}catch{return 1}}unlock(t){try{t>this.unlocked()&&localStorage.setItem(pl,String(t))}catch{}}}class O0{constructor(t){this.canvas=t,this.keys=new Set,this.just=new Set,this.mouseDown=[!1,!1,!1],this.mouseJust=[!1,!1,!1],this.dx=0,this.dy=0,this.wheel=0,this.locked=!1,this.onLockChange=null,this.wantLock=!1,window.addEventListener("keydown",e=>{(e.code==="Tab"||e.code==="F1")&&e.preventDefault(),this.keys.has(e.code)||this.just.add(e.code),this.keys.add(e.code)}),window.addEventListener("keyup",e=>this.keys.delete(e.code)),window.addEventListener("blur",()=>{this.keys.clear(),this.mouseDown=[!1,!1,!1]}),t.addEventListener("mousedown",e=>{this.locked?(this.mouseDown[e.button]=!0,this.mouseJust[e.button]=!0):this.wantLock&&this.requestLock()}),window.addEventListener("mouseup",e=>{this.mouseDown[e.button]=!1}),window.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("mousemove",e=>{this.locked&&(this.dx+=e.movementX||0,this.dy+=e.movementY||0)}),window.addEventListener("wheel",e=>{this.locked&&(this.wheel+=Math.sign(e.deltaY))},{passive:!0}),document.addEventListener("pointerlockchange",()=>{this.locked=document.pointerLockElement===this.canvas,this.onLockChange&&this.onLockChange(this.locked)}),document.addEventListener("pointerlockerror",()=>{this.locked=!1})}requestLock(){if(document.pointerLockElement!==this.canvas)try{this.canvas.requestPointerLock()}catch{}}releaseLock(){if(document.pointerLockElement)try{document.exitPointerLock()}catch{}}down(t){return this.keys.has(t)}pressed(t){return this.just.has(t)}mbDown(t){return this.mouseDown[t]}mbPressed(t){return this.mouseJust[t]}consumeMouse(){const t={x:this.dx,y:this.dy};return this.dx=0,this.dy=0,t}consumeWheel(){const t=this.wheel;return this.wheel=0,t}endFrame(){this.just.clear(),this.mouseJust=[!1,!1,!1]}}class B0{constructor(t){this.settings=t,this.ctx=null,this.posLoops=[],this.ambTimers={creak:3,moan:8,drip:1},this.ambProfile=null,this.musicIntensity=0,this.musicTarget=0,this._pulseNext=0,this.camPos={x:0,y:0,z:0},this.camRight={x:1,z:0},this.vitalsHp=1,this.vitalsExert=0}ensure(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}const t=window.AudioContext||window.webkitAudioContext;this.ctx=new t;const e=this.ctx;this.master=e.createGain(),this.master.connect(e.destination),this.sfx=e.createGain(),this.sfx.connect(this.master),this.amb=e.createGain(),this.amb.connect(this.master),this.musicBus=e.createGain(),this.musicBus.connect(this.master),this.applyVolumes(),this.noiseBuf=e.createBuffer(1,e.sampleRate*2,e.sampleRate);const n=this.noiseBuf.getChannelData(0);for(let s=0;s<n.length;s++)n[s]=Math.random()*2-1;this._initVitals(),this._initMusic()}applyVolumes(){if(!this.ctx)return;const t=this.settings.data;this.master.gain.value=t.volMaster,this.sfx.gain.value=t.volSfx,this.amb.gain.value=t.volSfx*.9,this.musicBus.gain.value=t.volMusic}setCamera(t,e){this.camPos={x:t.x,y:t.y,z:t.z},this.camRight={x:e.x,z:e.z}}_spatial(t,e,n=42){if(!t)return{vol:e,pan:0};const s=t.x-this.camPos.x,r=t.z-this.camPos.z,a=Math.sqrt(s*s+r*r);if(a>n)return{vol:0,pan:0};const o=e*Math.pow(1-a/n,1.6);let l=0;return a>.5&&(l=Math.max(-.85,Math.min(.85,(s*this.camRight.x+r*this.camRight.z)/a))),{vol:o,pan:l}}_out(t,e=0,n=null){const s=this.ctx,r=s.createGain();r.gain.value=t;const a=s.createStereoPanner?s.createStereoPanner():null;return a?(a.pan.value=e,r.connect(a),a.connect(n||this.sfx)):r.connect(n||this.sfx),r}_noise(t,e,n,{type:s="lowpass",freq:r=1e3,q:a=1,a:o=.002,peak:l=1,end:c=1e-4,rate:h=1}={}){const d=this.ctx,u=d.createBufferSource();u.buffer=this.noiseBuf,u.loop=!0,u.playbackRate.value=h;const f=d.createBiquadFilter();f.type=s,f.frequency.value=r,f.Q.value=a;const g=d.createGain();return g.gain.setValueAtTime(1e-4,e),g.gain.linearRampToValueAtTime(l,e+o),g.gain.exponentialRampToValueAtTime(Math.max(c,1e-4),e+n),u.connect(f),f.connect(g),g.connect(t),u.start(e),u.stop(e+n+.05),{src:u,f,g}}_tone(t,e,n,{type:s="sine",f0:r=440,f1:a=null,peak:o=.6,a:l=.004,curve:c="exp"}={}){const h=this.ctx,d=h.createOscillator();d.type=s,d.frequency.setValueAtTime(r,e),a!==null&&d.frequency.exponentialRampToValueAtTime(Math.max(a,1),e+n);const u=h.createGain();return u.gain.setValueAtTime(1e-4,e),u.gain.linearRampToValueAtTime(o,e+l),c==="exp"?u.gain.exponentialRampToValueAtTime(1e-4,e+n):u.gain.linearRampToValueAtTime(1e-4,e+n),d.connect(u),u.connect(t),d.start(e),d.stop(e+n+.05),{o:d,g:u}}play(t,e={}){if(!this.ctx)return;const{pos:n=null,vol:s=1,rate:r=1,range:a=42}=e,o=this._spatial(n,s,a);if(o.vol<=.003)return;const l=this._out(o.vol,o.pan),c=this.ctx.currentTime,h=gl[t];h&&h(this,l,c,r)}loop(t,e,{vol:n=1,range:s=40}={}){if(!this.ctx)return{stop:()=>{},pos:e};const r=this.ctx,a=r.createGain();a.gain.value=0;const o=r.createStereoPanner?r.createStereoPanner():null;o?(a.connect(o),o.connect(this.sfx)):a.connect(this.sfx);const l=_l[t]?_l[t](this,a):[],c={pos:e,baseVol:n,range:s,gain:a,pan:o,nodes:l,alive:!0,stop:()=>{c.alive=!1;try{a.gain.linearRampToValueAtTime(1e-4,r.currentTime+.2)}catch{}setTimeout(()=>{l.forEach(d=>{try{d.stop()}catch{}});try{a.disconnect()}catch{}},400);const h=this.posLoops.indexOf(c);h>=0&&this.posLoops.splice(h,1)}};return this.posLoops.push(c),c}ambience(t){if(!this.ctx){this.ambProfile=t;return}this.stopAmbience(),this.ambProfile=t||{};const e=this.ctx,n=this.ambProfile;if(this.ambNodes=[],n.wind){const s=e.createBufferSource();s.buffer=this.noiseBuf,s.loop=!0;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=320,r.Q.value=.6;const a=e.createGain();a.gain.value=.1*n.wind;const o=e.createOscillator();o.frequency.value=.11;const l=e.createGain();l.gain.value=.05*n.wind,o.connect(l),l.connect(a.gain),s.connect(r),r.connect(a),a.connect(this.amb),s.start(),o.start(),this.ambNodes.push(s,o)}if(n.industrial){const s=e.createOscillator();s.type="sawtooth",s.frequency.value=49;const r=e.createBiquadFilter();r.type="lowpass",r.frequency.value=160;const a=e.createGain();a.gain.value=.045*n.industrial;const o=e.createOscillator();o.frequency.value=7.3;const l=e.createGain();l.gain.value=.018*n.industrial,o.connect(l),l.connect(a.gain),s.connect(r),r.connect(a),a.connect(this.amb),s.start(),o.start(),this.ambNodes.push(s,o)}}stopAmbience(){this.ambNodes&&this.ambNodes.forEach(t=>{try{t.stop()}catch{}}),this.ambNodes=null}_initVitals(){const t=this.ctx;this.heartGain=t.createGain(),this.heartGain.gain.value=0,this.heartGain.connect(this.master),this.breathGain=t.createGain(),this.breathGain.gain.value=0,this.breathGain.connect(this.master),this._heartNext=0,this._breathNext=0}updateVitals(t,e){this.vitalsHp=t,this.vitalsExert=e}_initMusic(){const t=this.ctx;this.droneGain=t.createGain(),this.droneGain.gain.value=0;const e=t.createBiquadFilter();e.type="lowpass",e.frequency.value=240,this.droneGain.connect(e),e.connect(this.musicBus);const n=t.createOscillator();n.type="sawtooth",n.frequency.value=55;const s=t.createOscillator();s.type="sawtooth",s.frequency.value=55.9;const r=t.createOscillator();r.type="sine",r.frequency.value=110.3;const a=t.createGain();a.gain.value=.3,n.connect(this.droneGain),s.connect(this.droneGain),r.connect(a),a.connect(this.droneGain),n.start(),s.start(),r.start()}setMusicIntensity(t){this.musicTarget=Math.max(0,Math.min(1,t))}update(t){if(!this.ctx)return;const e=this.ctx,n=e.currentTime;for(const a of this.posLoops){if(!a.alive)continue;const o=this._spatial(a.pos,a.baseVol,a.range);a.gain.gain.setTargetAtTime(o.vol*.9,n,.1),a.pan&&a.pan.pan.setTargetAtTime(o.pan,n,.1)}if(this.musicIntensity+=(this.musicTarget-this.musicIntensity)*Math.min(1,t*.8),this.droneGain&&this.droneGain.gain.setTargetAtTime(this.musicIntensity*.14,n,.3),this.musicIntensity>.55&&n>=this._pulseNext){this._pulseNext=n+.62;const a=this._out(this.musicIntensity*.22,0,this.musicBus);this._tone(a,n,.22,{type:"sine",f0:58,f1:40,peak:1})}const s=this.vitalsHp<.35?1-this.vitalsHp/.35:0;if(s>.02&&n>=this._heartNext){const a=70+s*60;this._heartNext=n+60/a;const o=this._out(.5*s,0,this.master);this._tone(o,n,.1,{type:"sine",f0:55,f1:38,peak:1}),this._tone(o,n+.16,.09,{type:"sine",f0:50,f1:35,peak:.7})}if(this.vitalsExert>.4&&n>=this._breathNext){this._breathNext=n+1.5-this.vitalsExert*.5;const a=this._out(.12*this.vitalsExert,0,this.master);this._noise(a,n,.5,{type:"bandpass",freq:900,q:1.4,a:.18,peak:1})}const r=this.ambProfile;if(r){if(this.ambTimers.creak-=t,this.ambTimers.moan-=t,r.creaks&&this.ambTimers.creak<=0){this.ambTimers.creak=6+Math.random()*14;const a=this._out(.06*r.creaks,(Math.random()-.5)*1.2,this.amb);this._tone(a,n,.9,{type:"sawtooth",f0:140+Math.random()*120,f1:90,peak:.5,a:.3})}if(r.moans&&this.ambTimers.moan<=0){this.ambTimers.moan=10+Math.random()*20;const a=this._out(.05*r.moans,(Math.random()-.5)*1.4,this.amb);gl.groan(this,a,n,.7+Math.random()*.3)}if(r.crickets&&Math.random()<t*3){const a=this._out(.028*r.crickets,(Math.random()-.5)*1.6,this.amb),o=3800+Math.random()*800;for(let l=0;l<3;l++)this._tone(a,n+l*.07,.05,{type:"sine",f0:o,peak:.8})}if(r.drips&&Math.random()<t*.5){const a=this._out(.14*r.drips,(Math.random()-.5)*1.6,this.amb);this._tone(a,n,.14,{type:"sine",f0:1200+Math.random()*800,f1:300,peak:.8})}}}}const gl={swing(i,t,e){i._noise(t,e,.16,{type:"bandpass",freq:700,q:2,a:.02,peak:.5})},hitFlesh(i,t,e){i._noise(t,e,.12,{type:"lowpass",freq:700,peak:.9}),i._tone(t,e,.1,{type:"sine",f0:110,f1:55,peak:.9})},hitWall(i,t,e){i._noise(t,e,.07,{type:"highpass",freq:1600,peak:.7}),i._tone(t,e,.07,{type:"square",f0:300,f1:140,peak:.3})},hitWood(i,t,e){i._noise(t,e,.09,{type:"lowpass",freq:1100,peak:.8}),i._tone(t,e,.08,{type:"triangle",f0:190,f1:90,peak:.5})},shot_pistol(i,t,e){i._noise(t,e,.16,{type:"lowpass",freq:3400,peak:1.4,a:.001}),i._tone(t,e,.12,{type:"sine",f0:160,f1:45,peak:1.2})},shot_shotgun(i,t,e){i._noise(t,e,.3,{type:"lowpass",freq:2400,peak:1.8,a:.001}),i._tone(t,e,.22,{type:"sine",f0:110,f1:30,peak:1.6})},shot_rifle(i,t,e){i._noise(t,e,.26,{type:"lowpass",freq:4200,peak:1.7,a:.001}),i._tone(t,e,.3,{type:"sine",f0:130,f1:32,peak:1.4}),i._noise(t,e+.06,.35,{type:"lowpass",freq:700,peak:.4})},shot_smg(i,t,e){i._noise(t,e,.1,{type:"lowpass",freq:3e3,peak:1.1,a:.001}),i._tone(t,e,.08,{type:"sine",f0:170,f1:55,peak:.9})},dry(i,t,e){i._tone(t,e,.03,{type:"square",f0:900,peak:.25}),i._tone(t,e+.06,.03,{type:"square",f0:650,peak:.2})},reload(i,t,e){i._tone(t,e,.04,{type:"square",f0:500,peak:.28}),i._noise(t,e+.02,.05,{type:"highpass",freq:2400,peak:.3}),i._tone(t,e+.3,.04,{type:"square",f0:700,peak:.3})},reloadEnd(i,t,e){i._tone(t,e,.05,{type:"square",f0:850,peak:.35}),i._noise(t,e,.04,{type:"highpass",freq:3e3,peak:.3})},shell(i,t,e){i._tone(t,e+.15,.05,{type:"sine",f0:2800,f1:1800,peak:.12}),i._tone(t,e+.26,.04,{type:"sine",f0:3200,f1:2100,peak:.08})},step(i,t,e,n){i._noise(t,e,.07,{type:"lowpass",freq:550*n,peak:.5})},stepMetal(i,t,e){i._noise(t,e,.08,{type:"bandpass",freq:1300,q:3,peak:.4}),i._tone(t,e,.09,{type:"sine",f0:260,f1:130,peak:.15})},land(i,t,e){i._noise(t,e,.14,{type:"lowpass",freq:400,peak:.8})},groan(i,t,e,n=1){const s=i.ctx,r=s.createOscillator();r.type="sawtooth";const a=(75+Math.random()*50)*n;r.frequency.setValueAtTime(a,e),r.frequency.linearRampToValueAtTime(a*(.8+Math.random()*.5),e+.7),r.frequency.linearRampToValueAtTime(a*.7,e+1.4);const o=s.createOscillator();o.frequency.value=5+Math.random()*4;const l=s.createGain();l.gain.value=a*.13,o.connect(l),l.connect(r.frequency);const c=s.createBiquadFilter();c.type="bandpass",c.frequency.value=320,c.Q.value=.8;const h=s.createGain();h.gain.setValueAtTime(1e-4,e),h.gain.linearRampToValueAtTime(.55,e+.25),h.gain.exponentialRampToValueAtTime(1e-4,e+1.5),r.connect(c),c.connect(h),h.connect(t),r.start(e),r.stop(e+1.6),o.start(e),o.stop(e+1.6),i._noise(t,e+.1,1.1,{type:"bandpass",freq:500,q:1,a:.3,peak:.14})},groanAlert(i,t,e){const n=i.ctx,s=n.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(90,e),s.frequency.linearRampToValueAtTime(210,e+.5),s.frequency.linearRampToValueAtTime(150,e+1);const r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=420,r.Q.value=.9;const a=n.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(.8,e+.15),a.gain.exponentialRampToValueAtTime(1e-4,e+1.1),s.connect(r),r.connect(a),a.connect(t),s.start(e),s.stop(e+1.2)},scream(i,t,e){const n=i.ctx,s=n.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(400,e),s.frequency.linearRampToValueAtTime(950,e+.35),s.frequency.linearRampToValueAtTime(700,e+1.3);const r=n.createOscillator();r.frequency.value=11;const a=n.createGain();a.gain.value=90,r.connect(a),a.connect(s.frequency);const o=n.createGain();o.gain.setValueAtTime(1e-4,e),o.gain.linearRampToValueAtTime(.85,e+.1),o.gain.exponentialRampToValueAtTime(1e-4,e+1.5),s.connect(o),o.connect(t),s.start(e),s.stop(e+1.6),r.start(e),r.stop(e+1.6),i._noise(t,e,1.2,{type:"highpass",freq:1800,a:.1,peak:.28})},roar(i,t,e){i._tone(t,e,1.1,{type:"sawtooth",f0:65,f1:95,peak:.9,a:.1,curve:"exp"}),i._noise(t,e,1,{type:"lowpass",freq:400,a:.1,peak:.6})},hiss(i,t,e){i._noise(t,e,.6,{type:"highpass",freq:2200,a:.05,peak:.4}),i._tone(t,e,.5,{type:"sawtooth",f0:210,f1:160,peak:.2,a:.06})},bite(i,t,e){i._noise(t,e,.18,{type:"lowpass",freq:900,peak:.9,a:.01}),i._tone(t,e,.15,{type:"sawtooth",f0:130,f1:70,peak:.5})},zdie(i,t,e){const n=i.ctx,s=n.createOscillator();s.type="sawtooth",s.frequency.setValueAtTime(140,e),s.frequency.exponentialRampToValueAtTime(45,e+.9);const r=n.createBiquadFilter();r.type="bandpass",r.frequency.value=300;const a=n.createGain();a.gain.setValueAtTime(1e-4,e),a.gain.linearRampToValueAtTime(.5,e+.08),a.gain.exponentialRampToValueAtTime(1e-4,e+1),s.connect(r),r.connect(a),a.connect(t),s.start(e),s.stop(e+1.1)},zfall(i,t,e){i._noise(t,e,.2,{type:"lowpass",freq:350,peak:.7})},hurt(i,t,e){i._tone(t,e,.18,{type:"square",f0:170,f1:90,peak:.3}),i._noise(t,e,.15,{type:"bandpass",freq:800,q:1,peak:.4})},heal(i,t,e){i._tone(t,e,.3,{type:"sine",f0:440,peak:.2}),i._tone(t,e+.18,.35,{type:"sine",f0:550,peak:.2})},doorCreak(i,t,e){i._tone(t,e,.8,{type:"sawtooth",f0:170,f1:260,peak:.12,a:.25}),i._noise(t,e,.5,{type:"bandpass",freq:1400,q:4,a:.15,peak:.1})},doorLocked(i,t,e){i._tone(t,e,.05,{type:"square",f0:420,peak:.3}),i._tone(t,e+.09,.05,{type:"square",f0:380,peak:.25})},knock(i,t,e){for(let n=0;n<2;n++)i._noise(t,e+n*.22,.09,{type:"lowpass",freq:500,peak:.9}),i._tone(t,e+n*.22,.09,{type:"sine",f0:130,f1:70,peak:.6})},doorBreak(i,t,e){i._noise(t,e,.4,{type:"lowpass",freq:1400,peak:1.3}),i._tone(t,e,.25,{type:"sine",f0:100,f1:40,peak:1.1});for(let n=0;n<4;n++)i._noise(t,e+.05+n*.06,.05,{type:"bandpass",freq:1800+n*500,q:3,peak:.5})},glass(i,t,e){i._noise(t,e,.25,{type:"highpass",freq:3200,peak:.9});for(let n=0;n<5;n++)i._tone(t,e+Math.random()*.15,.2,{type:"sine",f0:2500+Math.random()*3500,peak:.15})},pickup(i,t,e){i._tone(t,e,.08,{type:"triangle",f0:520,peak:.25}),i._tone(t,e+.07,.1,{type:"triangle",f0:700,peak:.22})},key(i,t,e){i._tone(t,e,.06,{type:"sine",f0:1400,peak:.2}),i._tone(t,e+.08,.06,{type:"sine",f0:1900,peak:.18}),i._noise(t,e,.08,{type:"highpass",freq:4e3,peak:.15})},checkpoint(i,t,e){i._tone(t,e,.5,{type:"sine",f0:660,peak:.16}),i._tone(t,e+.16,.6,{type:"sine",f0:880,peak:.14})},sting(i,t,e){[220,293.7,349.2].forEach((s,r)=>{i._tone(t,e+r*.3,1,{type:"triangle",f0:s,peak:.2}),i._tone(t,e+r*.3,1.2,{type:"sine",f0:s/2,peak:.15})})},lever(i,t,e){i._tone(t,e,.08,{type:"square",f0:220,f1:150,peak:.35}),i._noise(t,e+.06,.1,{type:"bandpass",freq:900,q:2,peak:.4})},valve(i,t,e){i._tone(t,e,.22,{type:"sawtooth",f0:300,f1:380,peak:.1,a:.08}),i._noise(t,e,.2,{type:"bandpass",freq:1600,q:5,a:.05,peak:.12})},explosion(i,t,e){i._noise(t,e,1.3,{type:"lowpass",freq:900,peak:2.2,a:.002}),i._tone(t,e,.9,{type:"sine",f0:70,f1:25,peak:2}),i._noise(t,e+.1,.9,{type:"lowpass",freq:250,peak:.9})},static(i,t,e){i._noise(t,e,1.6,{type:"bandpass",freq:1500,q:.6,a:.05,peak:.25})},radioVoice(i,t,e){i._noise(t,e,3.2,{type:"bandpass",freq:1400,q:.7,a:.05,peak:.12});let n=e+.2;for(let s=0;s<9;s++){const r=.08+Math.random()*.18;i._tone(t,n,r,{type:"sawtooth",f0:190+Math.random()*140,f1:160+Math.random()*100,peak:.14,a:.02}),n+=r+(Math.random()<.3?.25:.04)}},beep(i,t,e){i._tone(t,e,.12,{type:"sine",f0:880,peak:.2})},click(i,t,e){i._tone(t,e,.03,{type:"square",f0:700,peak:.15})},thud(i,t,e){i._noise(t,e,.25,{type:"lowpass",freq:300,peak:1.2}),i._tone(t,e,.2,{type:"sine",f0:80,f1:35,peak:1})},rubble(i,t,e){for(let n=0;n<6;n++)i._noise(t,e+n*.12+Math.random()*.08,.15,{type:"lowpass",freq:500+Math.random()*600,peak:.7});i._tone(t,e,.8,{type:"sine",f0:55,f1:30,peak:1})}},_l={generator(i,t){const e=i.ctx,n=e.createOscillator();n.type="sawtooth",n.frequency.value=55;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=220;const r=e.createGain();r.gain.value=.5;const a=e.createOscillator();a.frequency.value=9;const o=e.createGain();return o.gain.value=.25,a.connect(o),o.connect(r.gain),n.connect(s),s.connect(r),r.connect(t),n.start(),a.start(),[n,a]},alarm(i,t){const e=i.ctx,n=e.createOscillator();n.type="square",n.frequency.value=660;const s=e.createOscillator();s.type="square",s.frequency.value=1.6;const r=e.createGain();r.gain.value=220,s.connect(r),r.connect(n.frequency);const a=e.createGain();return a.gain.value=.16,n.connect(a),a.connect(t),n.start(),s.start(),[n,s]},engine(i,t){const e=i.ctx,n=e.createOscillator();n.type="sawtooth",n.frequency.value=72;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=300;const r=e.createGain();r.gain.value=.5;const a=e.createOscillator();a.frequency.value=13;const o=e.createGain();return o.gain.value=9,a.connect(o),o.connect(n.frequency),n.connect(s),s.connect(r),r.connect(t),n.start(),a.start(),[n,a]},pump(i,t){const e=i.ctx,n=e.createOscillator();n.type="sine",n.frequency.value=46;const s=e.createGain();s.gain.value=.4;const r=e.createOscillator();r.type="square",r.frequency.value=1.4;const a=e.createGain();a.gain.value=.35,r.connect(a),a.connect(s.gain);const o=e.createBufferSource();o.buffer=i.noiseBuf,o.loop=!0;const l=e.createBiquadFilter();l.type="bandpass",l.frequency.value=2e3,l.Q.value=2;const c=e.createGain();return c.gain.value=.05,o.connect(l),l.connect(c),c.connect(t),n.connect(s),s.connect(t),n.start(),r.start(),o.start(),[n,r,o]},fire(i,t){const e=i.ctx,n=e.createBufferSource();n.buffer=i.noiseBuf,n.loop=!0;const s=e.createBiquadFilter();s.type="lowpass",s.frequency.value=900;const r=e.createGain();r.gain.value=.3;const a=e.createOscillator();a.frequency.value=5.7;const o=e.createGain();return o.gain.value=.12,a.connect(o),o.connect(r.gain),n.connect(s),s.connect(r),r.connect(t),n.start(),a.start(),[n,a]},staticLoop(i,t){const e=i.ctx,n=e.createBufferSource();n.buffer=i.noiseBuf,n.loop=!0;const s=e.createBiquadFilter();s.type="bandpass",s.frequency.value=1500,s.Q.value=.5;const r=e.createGain();return r.gain.value=.12,n.connect(s),s.connect(r),r.connect(t),n.start(),[n]}};let z0=0;class V0{constructor(){this.colliders=[]}clear(){this.colliders.length=0}add(t,e,n,s,r,a,o={}){const l={id:++z0,min:new T(t,e,n),max:new T(s,r,a),enabled:!0,seeThrough:!!o.seeThrough,tag:o.tag||null,onDamage:o.onDamage||null,door:o.door||null};return this.colliders.push(l),l}addBox(t,e,n,s,r,a,o={}){return this.add(t-s/2,e,n-a/2,t+s/2,e+r,n+a/2,o)}remove(t){const e=this.colliders.indexOf(t);e>=0&&this.colliders.splice(e,1)}_overlap(t,e,n){return t.x<n.max.x&&e.x>n.min.x&&t.y<n.max.y&&e.y>n.min.y&&t.z<n.max.z&&e.z>n.min.z}move(t,e,n,s,{step:r=.45,canStep:a=!0}={}){const o={grounded:!1,blockedH:!1,hitCeil:!1},l=new T,c=new T,h=()=>{l.set(t.x-e,t.y,t.z-e),c.set(t.x+e,t.y+n,t.z+e)},d=(u,f)=>{if(f===0)return!1;t[u]+=f,h();let g=!1;for(const _ of this.colliders)_.enabled&&this._overlap(l,c,_)&&(g=!0,u==="y"?f<0?(t.y=_.max.y,o.grounded=!0):(t.y=_.min.y-n-.001,o.hitCeil=!0):f>0?t[u]=_.min[u]-e-.001:t[u]=_.max[u]+e+.001,h());return g};for(const u of["x","z"]){const f=s[u];if(f===0)continue;const g=t[u],_=d(u,f);if(_&&a&&Math.abs(t[u]-g)<Math.abs(f)*.5){const p=t.y;t.y+=r,h();let m=!0;for(const v of this.colliders)if(v.enabled&&this._overlap(l,c,v)){m=!1;break}if(m){t[u]=g;const v=d(u,f);d("y",-(r+.05)),o.grounded,v&&(o.blockedH=!0)}else t.y=p,o.blockedH=!0}else _&&(o.blockedH=!0)}return s.y!==0&&d("y",s.y),o}raycast(t,e,n,{skipSeeThrough:s=!1}={}){let r=null;for(const a of this.colliders){if(!a.enabled||s&&a.seeThrough)continue;const o=vl(t,e,a.min,a.max,n);o!==null&&(r===null||o.dist<r.dist)&&(r=o,r.col=a)}return r}los(t,e){const n=new T().subVectors(e,t),s=n.length();if(s<.01)return!0;n.divideScalar(s);for(const r of this.colliders){if(!r.enabled||r.seeThrough)continue;if(vl(t,n,r.min,r.max,s-.05)!==null)return!1}return!0}}function vl(i,t,e,n,s){let r=0,a=s,o=-1,l=1;for(let d=0;d<3;d++){const u=d===0?"x":d===1?"y":"z",f=i[u],g=t[u];if(Math.abs(g)<1e-9){if(f<e[u]||f>n[u])return null}else{const _=1/g;let p=(e[u]-f)*_,m=(n[u]-f)*_,v=-1;if(p>m){const y=p;p=m,m=y,v=1}if(p>r&&(r=p,o=d,l=v),a=Math.min(a,m),r>a)return null}}if(r<=0||r>s)return null;const c=new T(i.x+t.x*r,i.y+t.y*r,i.z+t.z*r),h=new T;return o===0?h.x=l:o===1?h.y=l:o===2&&(h.z=l),{dist:r,point:c,normal:h}}function Ws(i,t,e,n,s){const r=new T().subVectors(i,e),a=r.dot(t),o=r.dot(r)-n*n,l=a*a-o;if(l<0)return null;const c=-a-Math.sqrt(l);return c<0||c>s?null:c}function H0(i,t,e,n,s,r){const a=e.clone();a.y+=s;const o=e.clone();o.y+=n-s;const l=i.x-a.x,c=i.z-a.z,h=t.x,d=t.z,u=h*h+d*d;let f=null;if(u>1e-9){const m=2*(l*h+c*d),v=l*l+c*c-s*s,y=m*m-4*u*v;if(y>=0){const w=(-m-Math.sqrt(y))/(2*u);if(w>0&&w<=r){const D=i.y+t.y*w;D>=a.y-s&&D<=o.y+s&&(f=w)}}}const g=Ws(i,t,o,s,r),_=Ws(i,t,a,s,r);let p=null;for(const m of[f,g,_])m!==null&&(p===null||m<p)&&(p=m);return p}function Wt(i,{pattern:t="noise",noise:e=22,scale:n=1,line:s=null,repeat:r=2}={}){const o=document.createElement("canvas");o.width=128,o.height=128;const l=o.getContext("2d");l.fillStyle=i,l.fillRect(0,0,128,128);const[c,h,d]=G0(i),u=l.getImageData(0,0,128,128);for(let g=0;g<u.data.length;g+=4){const _=(Math.random()-.5)*e*2;u.data[g]=Vr(c+_),u.data[g+1]=Vr(h+_),u.data[g+2]=Vr(d+_)}if(l.putImageData(u,0,0),l.globalAlpha=.5,t==="planks"){l.strokeStyle="rgba(0,0,0,0.45)",l.lineWidth=2;for(let g=0;g<=128;g+=32)l.beginPath(),l.moveTo(0,g),l.lineTo(128,g),l.stroke();for(let g=0;g<128;g+=32){const _=g/32%2*64+16;l.beginPath(),l.moveTo(_,g),l.lineTo(_,g+32),l.stroke()}}else if(t==="bricks"){l.strokeStyle="rgba(30,22,18,0.6)",l.lineWidth=2;for(let g=0;g<=128;g+=16)l.beginPath(),l.moveTo(0,g),l.lineTo(128,g),l.stroke();for(let g=0;g<128;g+=16)for(let _=g/16%2*16;_<=128;_+=32)l.beginPath(),l.moveTo(_,g),l.lineTo(_,g+16),l.stroke()}else if(t==="tiles"){l.strokeStyle="rgba(20,20,20,0.5)",l.lineWidth=2;for(let g=0;g<=128;g+=32)l.beginPath(),l.moveTo(0,g),l.lineTo(128,g),l.stroke();for(let g=0;g<=128;g+=32)l.beginPath(),l.moveTo(g,0),l.lineTo(g,128),l.stroke()}else if(t==="corrugated")for(let g=0;g<128;g+=8)l.fillStyle="rgba(0,0,0,0.3)",l.fillRect(g,0,3,128),l.fillStyle="rgba(255,255,255,0.12)",l.fillRect(g+4,0,2,128);else if(t==="grate"){l.fillStyle="rgba(0,0,0,0.7)";for(let g=4;g<128;g+=16)for(let _=4;_<128;_+=16)l.fillRect(_,g,8,8)}else if(t==="grass")for(let g=0;g<260;g++){l.strokeStyle=`rgba(${30+Math.random()*40|0},${50+Math.random()*40|0},25,0.5)`;const _=Math.random()*128,p=Math.random()*128;l.beginPath(),l.moveTo(_,p),l.lineTo(_+(Math.random()-.5)*4,p-3-Math.random()*4),l.stroke()}else if(t==="cracks"){l.strokeStyle="rgba(0,0,0,0.35)",l.lineWidth=1;for(let g=0;g<8;g++){let _=Math.random()*128,p=Math.random()*128;l.beginPath(),l.moveTo(_,p);for(let m=0;m<5;m++)_+=(Math.random()-.5)*40,p+=(Math.random()-.5)*40,l.lineTo(_,p);l.stroke()}}s&&(l.globalAlpha=.85,l.fillStyle=s,l.fillRect(128/2-3,0,6,128)),l.globalAlpha=1;const f=new r0(o);return f.wrapS=f.wrapT=Ls,f.repeat.set(r,r),f.magFilter=Ce,f.minFilter=bn,f.colorSpace=ze,f}function G0(i){const t=i.replace("#","");return[parseInt(t.substr(0,2),16),parseInt(t.substr(2,2),16),parseInt(t.substr(4,2),16)]}function Vr(i){return Math.max(0,Math.min(255,i))}function Xt(i,t={}){return new Pe({map:i,...t})}function W0(){return{grass:Xt(Wt("#2a3d1a",{pattern:"grass",noise:16,repeat:8})),dirt:Xt(Wt("#3d2f1f",{noise:20,repeat:6})),asphalt:Xt(Wt("#1a1b18",{pattern:"cracks",noise:10,repeat:6})),asphaltLine:Xt(Wt("#1a1b18",{noise:10,line:"#4a4530",repeat:1})),concrete:Xt(Wt("#3a3930",{pattern:"cracks",noise:14,repeat:3})),concreteDark:Xt(Wt("#2a2a25",{pattern:"cracks",noise:12,repeat:3})),brick:Xt(Wt("#4a2a1a",{pattern:"bricks",noise:16,repeat:3})),brickGray:Xt(Wt("#3a3a32",{pattern:"bricks",noise:14,repeat:3})),plaster:Xt(Wt("#5a5544",{noise:12,repeat:3})),plasterOld:Xt(Wt("#45403c",{pattern:"cracks",noise:16,repeat:3})),wood:Xt(Wt("#3a2a1a",{pattern:"planks",noise:18,repeat:2})),woodDark:Xt(Wt("#2a1810",{pattern:"planks",noise:16,repeat:2})),woodFloor:Xt(Wt("#3a2a1c",{pattern:"planks",noise:14,repeat:4})),metal:Xt(Wt("#2a2e30",{noise:10,repeat:2})),metalDark:Xt(Wt("#1a2022",{noise:8,repeat:2})),rust:Xt(Wt("#3a2a1a",{noise:26,repeat:2})),corrugated:Xt(Wt("#303428",{pattern:"corrugated",noise:12,repeat:3})),corrugatedRust:Xt(Wt("#3a2a1a",{pattern:"corrugated",noise:20,repeat:3})),roof:Xt(Wt("#2a2018",{pattern:"tiles",noise:14,repeat:4})),tile:Xt(Wt("#4a4940",{pattern:"tiles",noise:8,repeat:4})),sewer:Xt(Wt("#252c22",{pattern:"bricks",noise:18,repeat:3})),sewerFloor:Xt(Wt("#19201a",{noise:16,repeat:4})),grate:Xt(Wt("#1a1e20",{pattern:"grate",noise:8,repeat:2})),water:new Pe({color:1714728,transparent:!0,opacity:.85}),glass:new Pe({color:4871512,transparent:!0,opacity:.3}),leaf:Xt(Wt("#1a2a1c",{noise:20,repeat:2})),leafDead:Xt(Wt("#3a3020",{noise:22,repeat:2})),trunk:Xt(Wt("#2a2a1c",{noise:16,repeat:2})),corn:Xt(Wt("#5a5a28",{noise:24,repeat:2})),blood:new Pi({color:3804424,transparent:!0,opacity:.85}),carRed:Xt(Wt("#4a1a0a",{noise:12,repeat:1})),carBlue:Xt(Wt("#1a2a3a",{noise:12,repeat:1})),carWhite:Xt(Wt("#4a4c44",{noise:12,repeat:1})),carPolice:Xt(Wt("#1a1a28",{noise:8,repeat:1})),tire:new Pe({color:657930}),ammoBoxMat:new Pe({color:3815962,emissive:1710600}),medBoxMat:new Pe({color:4868666,emissive:3803656}),fuelMat:new Pe({color:9187106,emissive:3084040}),keyMat:new Pe({color:6969920,emissive:3811866}),partMat:new Pe({color:3820114,emissive:658448}),noteMat:new Pe({color:5921360,emissive:2435616}),weaponPickup:new Pe({color:1711136,emissive:657930}),barrelRed:Xt(Wt("#4a1a0a",{pattern:"corrugated",noise:14,repeat:1})),barrelGray:Xt(Wt("#2a2a22",{pattern:"corrugated",noise:14,repeat:1}))}}const As=1.75;class X0{constructor(t){this.g=t,this.doors=[],this.updaters=[]}get m(){return this.g.mats}get world(){return this.g.world}get group(){return this.g.levelGroup}reset(){this.doors.length=0,this.updaters.length=0}update(t){for(const e of this.doors)e._anim(t);for(const e of this.updaters)e(t)}_add(t){return this.group.add(t),t}box(t,e,n,s,r,a,o,l={}){const{ry:c=0,collide:h=!0,tag:d=null,onDamage:u=null,seeThrough:f=!1,castShadow:g=!1}=l,_=new Et(e,n,s),p=new pt(_,t);p.position.set(r,a+n/2,o),p.rotation.y=c,g&&(p.castShadow=!0,p.receiveShadow=!0),this._add(p);let m=null;if(h){let v=e,y=s;const w=Math.abs((c%(Math.PI*2)+Math.PI*2)%Math.PI);Math.abs(w-Math.PI/2)<.3&&(v=s,y=e),m=this.world.addBox(r,a,o,v,n,y,{tag:d,onDamage:u,seeThrough:f}),m.mesh=p}return p.userData.col=m,p}ground(t,e,n,{x:s=0,z:r=0,y:a=0}={}){const o=new Kn(t,e),l=new pt(o,n);return l.rotation.x=-Math.PI/2,l.position.set(s,a,r),l.receiveShadow=!0,this._add(l),this.world.add(s-t/2,a-1,r-e/2,s+t/2,a,r+e/2,{tag:"ground"}),l}patch(t,e,n,s,r,a=.02,o=0){const l=new Kn(t,e),c=new pt(l,n);return c.rotation.x=-Math.PI/2,c.rotation.z=o,c.position.set(s,a,r),this._add(c),c}road(t,e,n,s,{horizontal:r=!1}={}){this.patch(n,s,this.m.asphalt,t,e,.02);const a=6;if(r)for(let o=t-n/2+2;o<t+n/2-2;o+=a)this.patch(3,.3,this.m.asphaltLine,o,e,.03);else for(let o=e-s/2+2;o<e+s/2-2;o+=a)this.patch(.3,3,this.m.asphaltLine,t,o,.03)}wall(t,e,n,s,r,a,{t:o=.3,openings:l=[]}={}){const c=Math.abs(n-t)>Math.abs(s-e),h=Math.abs(c?n-t:s-e),d=c?Math.sign(n-t)||1:Math.sign(s-e)||1,u=[...l].sort((_,p)=>_.at-p.at),f=(_,p,m,v)=>{if(p-_<.02||v-m<.02)return;const y=(_+p)/2,w=p-_,D=v-m;c?this.box(a,w,D,o,t+d*y,m,e):this.box(a,o,D,w,t,m,e+d*y)};let g=0;for(const _ of u){const p=_.top===void 0?r:_.top,m=_.bottom||0;f(g,_.at,0,r),f(_.at,_.at+_.w,p,r),m>0&&f(_.at,_.at+_.w,0,m),g=_.at+_.w}f(g,h,0,r)}room(t,e,n,s,r,{mat:a,floorMat:o=null,ceilMat:l=null,openings:c={},floor:h=!0,ceil:d=!0,t:u=.3,y:f=0}={}){a=a||this.m.plaster;const g=t-n/2,_=t+n/2,p=e-s/2,m=e+s/2;return this.wall(g,p,_,p,r+f,a,{t:u,openings:(c.n||[]).map(v=>({...v,bottom:(v.bottom||0)+f,top:(v.top===void 0?r:v.top)+f}))}),this.wall(g,m,_,m,r+f,a,{t:u,openings:c.s||[]}),this.wall(g,p,g,m,r+f,a,{t:u,openings:c.w||[]}),this.wall(_,p,_,m,r+f,a,{t:u,openings:c.e||[]}),h&&o&&this.patch(n,s,o,t,e,f+.03),d&&this.box(l||a,n+u,.25,s+u,t,f+r,e),{x0:g,x1:_,z0:p,z1:m}}door(t,e,n,{locked:s=!1,keyId:r=null,keyLabel:a="열쇠",label:o="문",hp:l=130,metal:c=!1,w:h=1.1,h:d=2.2,startOpen:u=!1}={}){const f=this.g,g=c?this.m.metalDark:this.m.woodDark,_=new Me;_.position.set(t,0,e),_.rotation.y=n;const p=new pt(new Et(h,d,.1),g);p.position.set(h/2,d/2,0),_.add(p);const m=new pt(new Et(.08,.08,.2),this.m.metal);m.position.set(h-.15,d*.45,0),_.add(m),this._add(_);const v=Math.round(Math.cos(n)),y=Math.round(Math.sin(n)),w=t+v*h/2,D=e-y*h/2,E=Math.abs(v)*h+Math.abs(y)*.3,R=Math.abs(y)*h+Math.abs(v)*.3,C={pivot:_,mesh:p,locked:s,keyId:r,keyLabel:a,label:o,hp:l,maxHp:l,metal:c,isOpen:u,broken:!1,angle:u?As:0,targetAngle:u?As:0,pos:new T(t+v*h/2,1.1,e-y*h/2),shake:0,col:null,setOpen(b){this.broken||(this.isOpen=b,this.targetAngle=b?As:0,this.col.enabled=!b,f.audio.play("doorCreak",{pos:this.pos,vol:.9}),b?f.emitNoise(this.pos,6):f.emitNoise(this.pos,8))},unlock(){this.locked=!1},damage(b){this.broken||this.isOpen||(this.hp-=b,this.shake=.25,f.audio.play("knock",{pos:this.pos,vol:1}),f.emitNoise(this.pos,14),this.hp<=0&&this.break())},break(){this.broken||(this.broken=!0,this.col.enabled=!1,f.audio.play("doorBreak",{pos:this.pos,vol:1.2}),f.emitNoise(this.pos,24),this.targetAngle=As*.7,p.rotation.z=.12,p.position.y=d/2-.15)},_anim(b){this.angle+=(this.targetAngle-this.angle)*Math.min(1,b*6),_.rotation.y=n+this.angle,this.shake>0?(this.shake-=b,_.position.x=t+(Math.random()-.5)*.04,_.position.z=e+(Math.random()-.5)*.04):(_.position.x=t,_.position.z=e)}};return C.col=this.world.add(w-E/2,0,D-R/2,w+E/2,d,D+R/2,{tag:"door",onDamage:b=>C.damage(b)}),C.col.door=C,C.col.enabled=!u,f.interact.add({pos:C.pos,radius:2.2,prompt:()=>C.broken?null:C.locked?`${C.label} — 잠김 (${C.keyLabel} 필요)`:C.isOpen?`${C.label} 닫기`:`${C.label} 열기`,onUse:()=>{if(!C.broken){if(C.locked){C.keyId&&f.player.keys.has(C.keyId)?(C.unlock(),f.audio.play("key",{vol:.9}),f.notify(`${C.keyLabel}로 문을 열었다`),C.setOpen(!0)):(f.audio.play("doorLocked",{pos:C.pos,vol:.9}),f.notify("잠겨 있다. 열쇠가 필요하다."));return}C.setOpen(!C.isOpen)}}}),this.doors.push(C),C}pane(t,e,n,s,r=1.4,a=1.1){const o=this.g,l=new pt(new Et(r,a,.05),this.m.glass);l.position.set(t,e+a/2,n),l.rotation.y=s,this._add(l);const c=Math.round(Math.cos(s)),h=Math.round(Math.sin(s)),d=Math.abs(c)*r+Math.abs(h)*.2,u=Math.abs(h)*r+Math.abs(c)*.2,f={broken:!1,pos:new T(t,e+a/2,n),break(){this.broken||(this.broken=!0,o.world.remove(this.col),l.visible=!1,o.audio.play("glass",{pos:this.pos,vol:1}),o.particles.glass(this.pos),o.emitNoise(this.pos,16))}};return f.col=this.world.addBox(t,e,n,d,a,u,{tag:"window",seeThrough:!0,onDamage:()=>f.break()}),f.col.pane=f,f}fence(t,e,n,s,{h:r=1.1}={}){const a=Math.abs(n-t)>Math.abs(s-e),o=Math.abs(a?n-t:s-e),l=a?{x:Math.sign(n-t)||1,z:0}:{x:0,z:Math.sign(s-e)||1},c=Math.max(2,Math.round(o/2.4));for(let f=0;f<=c;f++){const g=f/c*o;this.box(this.m.woodDark,.12,r,.12,t+l.x*g,0,e+l.z*g,{collide:!1})}const h=(t+n)/2,d=(e+s)/2;a?(this.box(this.m.wood,o,.08,.06,h,r*.55,e,{collide:!1}),this.box(this.m.wood,o,.08,.06,h,r*.9,e,{collide:!1})):(this.box(this.m.wood,.06,.08,o,t,r*.55,d,{collide:!1}),this.box(this.m.wood,.06,.08,o,t,r*.9,d,{collide:!1}));const u=.25;a?this.world.addBox(h,0,e,o,r,u,{seeThrough:!0,tag:"fence"}):this.world.addBox(t,0,d,u,r,o,{seeThrough:!0,tag:"fence"})}barricade(t,e,n,s,r=2.4){const a=Math.abs(n-t)>Math.abs(s-e),o=Math.abs(a?n-t:s-e),l=(t+n)/2,c=(e+s)/2;a?this.box(this.m.corrugatedRust,o,r,.25,l,0,e):this.box(this.m.corrugatedRust,.25,r,o,t,0,c)}car(t,e,n,{mat:s=null,alarm:r=!1,wreck:a=!1}={}){const o=this.g;s=s||this.m.carBlue;const l=new Me;l.position.set(t,0,e),l.rotation.y=n;const c=new pt(new Et(4.2,.85,1.9),s);c.position.y=.65,l.add(c);const h=new pt(new Et(2.2,.7,1.7),a?this.m.metalDark:this.m.glass);h.position.set(-.2,1.4,0),l.add(h);for(const[p,m]of[[-1.4,.95],[1.4,.95],[-1.4,-.95],[1.4,-.95]]){const v=new pt(new ce(.34,.34,.25,8),this.m.tire);v.rotation.x=Math.PI/2,v.position.set(p,.34,m),l.add(v)}a&&(l.rotation.z=(Math.random()-.5)*.06),this._add(l);const d=Math.abs(Math.cos(n))>.7,u=d?4.2:1.9,f=d?1.9:4.2,g={grp:l,alarmed:!1,alarmHandle:null,pos:new T(t,1,e),triggerAlarm:()=>{if(g.alarmed)return;g.alarmed=!0,g.alarmHandle=o.audio.loop("alarm",g.pos,{vol:.8,range:60});const p=new Gs(16746544,2.2,14);p.position.set(0,1.4,0),l.add(p);let m=0,v=11;this.updaters.push(y=>{if(!g.alarmed){p.intensity=0;return}m+=y,p.intensity=Math.sin(m*9)>0?2.2:0,m%1.5<y&&o.emitNoise(g.pos,46),m>v&&(g.alarmed=!1,g.alarmHandle&&g.alarmHandle.stop(),p.intensity=0)})}},_=this.world.addBox(t,0,e,u,2,f,{tag:"car",onDamage:r?()=>g.triggerAlarm():null});return _.mesh=l,g}tree(t,e,n=1){const s=new pt(new ce(.22*n,.34*n,3.2*n,6),this.m.trunk);s.position.set(t,1.6*n,e),this._add(s);const r=Math.random()<.4?this.m.leafDead:this.m.leaf;for(let a=0;a<3;a++){const o=(2.6-a*.6)*n,l=new pt(new fa(o,2.2*n,6),r);l.position.set(t,(2.6+a*1.3)*n,e),this._add(l)}this.world.addBox(t,0,e,.6*n,3*n,.6*n,{tag:"tree"})}deadTree(t,e,n=1){const s=new pt(new ce(.15*n,.3*n,4*n,5),this.m.trunk);s.position.set(t,2*n,e),s.rotation.z=(Math.random()-.5)*.15,this._add(s);for(let r=0;r<3;r++){const a=new pt(new ce(.05*n,.09*n,1.6*n,4),this.m.trunk);a.position.set(t+(Math.random()-.5)*.8,(2.5+r*.6)*n,e+(Math.random()-.5)*.8),a.rotation.z=.6+Math.random()*.8,a.rotation.y=Math.random()*Math.PI,this._add(a)}this.world.addBox(t,0,e,.5*n,4*n,.5*n,{tag:"tree"})}corn(t,e,n,s){const a=Math.floor(n*s*.55),o=new Et(.14,2.1,.14),l=new n0(o,this.m.corn,a),c=new Ot;for(let h=0;h<a;h++){const d=t-n/2+Math.random()*n,u=e-s/2+Math.random()*s,f=.8+Math.random()*.5;c.makeRotationY(Math.random()*Math.PI),c.setPosition(d,1.05*f,u),c.scale(new T(1,f,1)),l.setMatrixAt(h,c)}l.instanceMatrix.needsUpdate=!0,this._add(l)}rock(t,e,n=1){const s=new pt(new ma(n,0),this.m.concreteDark);s.position.set(t,n*.5,e),s.rotation.set(Math.random(),Math.random()*3,Math.random()),this._add(s),this.world.addBox(t,0,e,n*1.4,n,n*1.4,{tag:"rock"})}crate(t,e,{y:n=0,s=1,ry:r=0}={}){return this.box(this.m.wood,s,s,s,t,n,e,{ry:r,tag:"crate"})}shelf(t,e,n=0){return this.box(this.m.woodDark,2,2,.5,t,0,e,{ry:n}),null}counter(t,e,n,s){return this.box(this.m.woodDark,n,1,s,t,0,e)}table(t,e,n=0){this.box(this.m.wood,1.6,.08,.9,t,.72,e,{ry:n,collide:!1}),this.box(this.m.woodDark,1.4,.72,.7,t,0,e,{ry:n})}bed(t,e,n=0){this.box(this.m.woodDark,2.1,.35,1.2,t,0,e,{ry:n}),this.box(this.m.plaster,1.9,.15,1,t,.35,e,{ry:n,collide:!1})}machine(t,e,n,s=2.5,r=2.2,a=1.8){const o=this.box(this.m.metalDark,s,r,a,t,0,e,{ry:n});return this.box(this.m.rust,s*.4,.4,a*.4,t,r,e,{ry:n,collide:!1}),o}pipe(t,e,n,s,r,a,o=.18){const l=Math.abs(s-t)>.01,c=Math.abs(r-e)>.01,h=Math.abs(l?s-t:c?r-e:a-n),d=new pt(new ce(o,o,h,6),this.m.rust);d.position.set((t+s)/2,(e+r)/2,(n+a)/2),l?d.rotation.z=Math.PI/2:c||(d.rotation.x=Math.PI/2),this._add(d)}barrel(t,e,{explosive:n=!1}={}){const s=this.g,r=n?this.m.barrelRed:this.m.barrelGray,a=new pt(new ce(.45,.45,1.1,8),r);a.position.set(t,.55,e),this._add(a);const o={mesh:a,exploded:!1,hp:25,pos:new T(t,.7,e)};return o.col=this.world.addBox(t,0,e,.9,1.1,.9,{tag:n?"barrel":"prop",onDamage:n?l=>{o.exploded||(o.hp-=l,o.hp<=0&&(o.exploded=!0,a.visible=!1,s.world.remove(o.col),s.explode(o.pos,5.5,120)))}:null}),o}lamp(t,e,n,{color:s=16767392,intensity:r=1.2,dist:a=12,on:o=!0}={}){const l=new Gs(s,o?r:0,a*this.g.settings.perf.lightDist,1.6);l.position.set(t,e,n),this._add(l);const c=new pt(new Et(.25,.12,.25),new Pi({color:o?s:2236962}));return c.position.set(t,e,n),this._add(c),{light:l,bulb:c,intensity:r,setOn(h){l.intensity=h?r:0,c.material.color.setHex(h?s:2236962)}}}lampPost(t,e,{on:n=!1}={}){return this.box(this.m.metalDark,.18,4.6,.18,t,0,e),this.box(this.m.metalDark,1.2,.12,.16,t+.5,4.6,e,{collide:!1}),this.lamp(t+1,4.4,e,{on:n,intensity:1.6,dist:14,color:16771256})}stairs(t,e,n,{steps:s=10,stepH:r=.28,stepD:a=.38,w:o=1.8,mat:l=null}={}){l=l||this.m.concrete;const c=Math.round(Math.sin(n)),h=Math.round(Math.cos(n));for(let d=0;d<s;d++){const u=t+c*(d+.5)*a,f=e+h*(d+.5)*a,g=c===0?o:a,_=c===0?a:o;this.box(l,g,(d+1)*r,_,u,0,f)}return{topY:s*r,endX:t+c*s*a,endZ:e+h*s*a}}plank(t,e,n,s,r,a,o=.9){const l=Math.abs(s-t)>Math.abs(a-n),c=Math.abs(l?s-t:a-n)+.4,h=(t+s)/2,d=(n+a)/2,u=Math.min(e,r);l?this.box(this.m.wood,c,.12,o,h,u,d):this.box(this.m.wood,o,.12,c,h,u,d)}well(t,e){const n=new pt(new ce(1,1.1,.9,8),this.m.brickGray);n.position.set(t,.45,e),this._add(n),this.box(this.m.woodDark,.14,2.2,.14,t-.9,0,e,{collide:!1}),this.box(this.m.woodDark,.14,2.2,.14,t+.9,0,e,{collide:!1}),this.box(this.m.roof,2.4,.15,1.6,t,2.2,e,{collide:!1}),this.world.addBox(t,0,e,2.1,1,2.1,{tag:"well"})}tractor(t,e,n){const s=new Me;s.position.set(t,0,e),s.rotation.y=n;const r=new pt(new Et(2.8,1.1,1.4),this.m.rust);r.position.y=.9,s.add(r);const a=new pt(new Et(1.2,1.1,1.3),this.m.metalDark);a.position.set(-.6,1.9,0),s.add(a);const o=new pt(new ce(.85,.85,.4,8),this.m.tire);o.rotation.x=Math.PI/2,o.position.set(-.8,.85,.85),s.add(o);const l=o.clone();l.position.z=-.85,s.add(l);const c=new pt(new ce(.45,.45,.3,8),this.m.tire);c.rotation.x=Math.PI/2,c.position.set(1,.45,.75),s.add(c);const h=c.clone();h.position.z=-.75,s.add(h),this._add(s);const d=Math.abs(Math.cos(n))>.7;this.world.addBox(t,0,e,d?3.2:1.9,2.4,d?1.9:3.2,{tag:"tractor"})}gasPump(t,e,n=0){this.box(this.m.carRed,.7,1.7,.45,t,0,e,{ry:n}),this.box(this.m.metal,.5,.3,.3,t,1.7,e,{ry:n,collide:!1})}corpse(t,e,n=0){const s=new Me;s.position.set(t,.12,e),s.rotation.y=n;const r=new pt(new Et(.55,.22,1.3),this.m.metalDark);s.add(r);const a=new pt(new Et(.26,.2,.26),new Pe({color:6975578}));return a.position.set(0,0,.75),s.add(a),this._add(s),this.blood(t,e+.3,1.2),s}blood(t,e,n=.8){const s=new ua(n,7),r=new pt(s,this.m.blood);r.rotation.x=-Math.PI/2,r.rotation.z=Math.random()*Math.PI,r.position.set(t,.015+Math.random()*.01,e),this._add(r)}radio(t,e,n){this.box(this.m.metalDark,.5,.3,.25,t,e,n,{collide:!1}),this.box(this.m.metal,.03,.4,.03,t+.18,e+.3,n,{collide:!1})}}class q0{constructor(t,e){this.scene=t,this.max=e.perf.maxParticles,this.cursor=0,this.pos=new Float32Array(this.max*3),this.col=new Float32Array(this.max*3),this.vel=new Float32Array(this.max*3),this.life=new Float32Array(this.max),this.maxLife=new Float32Array(this.max),this.grav=new Float32Array(this.max);for(let r=0;r<this.max;r++)this.pos[r*3+1]=-999;const n=new Fe;this.posAttr=new De(this.pos,3),this.colAttr=new De(this.col,3),n.setAttribute("position",this.posAttr),n.setAttribute("color",this.colAttr);const s=new oc({size:.09,vertexColors:!0,sizeAttenuation:!0,transparent:!0,opacity:.95,depthWrite:!1});this.points=new s0(n,s),this.points.frustumCulled=!1,t.add(this.points)}setMax(t){}emit(t,e,n,s,{spread:r=.3,speed:a=2,up:o=1,color:l=[.5,.1,.05],colorVar:c=.1,life:h=.8,gravity:d=9}={}){for(let u=0;u<t;u++){const f=this.cursor;this.cursor=(this.cursor+1)%this.max;const g=f*3;this.pos[g]=e+(Math.random()-.5)*r,this.pos[g+1]=n+(Math.random()-.5)*r,this.pos[g+2]=s+(Math.random()-.5)*r,this.vel[g]=(Math.random()-.5)*a,this.vel[g+1]=Math.random()*a*o,this.vel[g+2]=(Math.random()-.5)*a;const _=(Math.random()-.5)*c;this.col[g]=Math.max(0,l[0]+_),this.col[g+1]=Math.max(0,l[1]+_),this.col[g+2]=Math.max(0,l[2]+_),this.life[f]=this.maxLife[f]=h*(.6+Math.random()*.6),this.grav[f]=d}}blood(t,e=null){if(this.emit(10,t.x,t.y,t.z,{spread:.15,speed:2.2,color:[.32,.04,.03],life:.5,gravity:10}),e)for(let n=0;n<4;n++){const s=this.cursor;this.cursor=(this.cursor+1)%this.max;const r=s*3;this.pos[r]=t.x,this.pos[r+1]=t.y,this.pos[r+2]=t.z,this.vel[r]=e.x*3+(Math.random()-.5),this.vel[r+1]=1+Math.random(),this.vel[r+2]=e.z*3+(Math.random()-.5),this.col[r]=.3,this.col[r+1]=.03,this.col[r+2]=.02,this.life[s]=this.maxLife[s]=.6,this.grav[s]=10}}spark(t){this.emit(6,t.x,t.y,t.z,{spread:.05,speed:3,color:[.9,.75,.4],colorVar:.15,life:.3,gravity:6})}dust(t){this.emit(5,t.x,t.y,t.z,{spread:.2,speed:.8,up:.6,color:[.45,.42,.36],life:.7,gravity:.6})}glass(t){this.emit(14,t.x,t.y,t.z,{spread:.4,speed:2.5,color:[.7,.8,.82],life:.6,gravity:9})}smoke(t,e=8){this.emit(e,t.x,t.y,t.z,{spread:.5,speed:.7,up:1.6,color:[.35,.35,.33],life:1.6,gravity:-.5})}shell(t,e){const n=this.cursor;this.cursor=(this.cursor+1)%this.max;const s=n*3;this.pos[s]=t.x,this.pos[s+1]=t.y,this.pos[s+2]=t.z,this.vel[s]=e.x*2+(Math.random()-.5),this.vel[s+1]=2+Math.random(),this.vel[s+2]=e.z*2+(Math.random()-.5),this.col[s]=.72,this.col[s+1]=.58,this.col[s+2]=.22,this.life[n]=this.maxLife[n]=.9,this.grav[n]=12}explosionFx(t){this.emit(30,t.x,t.y+.5,t.z,{spread:.6,speed:7,color:[.95,.6,.2],colorVar:.2,life:.5,gravity:4}),this.emit(20,t.x,t.y+1,t.z,{spread:1.2,speed:2,up:2.2,color:[.25,.24,.22],life:2,gravity:-.8})}update(t){for(let e=0;e<this.max;e++){if(this.life[e]<=0)continue;this.life[e]-=t;const n=e*3;if(this.life[e]<=0){this.pos[n+1]=-999;continue}this.vel[n+1]-=this.grav[e]*t,this.pos[n]+=this.vel[n]*t,this.pos[n+1]+=this.vel[n+1]*t,this.pos[n+2]+=this.vel[n+2]*t,this.pos[n+1]<.02&&this.grav[e]>0&&(this.pos[n+1]=.02,this.vel[n+1]*=-.3,this.vel[n]*=.6,this.vel[n+2]*=.6)}this.posAttr.needsUpdate=!0,this.colAttr.needsUpdate=!0}}const Y0=24,xl=1.62,j0=1.05,yl=1.75,Ml=1.2,Hi=.34;class K0{constructor(t){this.g=t,this.pos=new T,this.vel=new T,this.yaw=0,this.pitch=0,this.maxHp=100,this.hp=100,this.maxStamina=100,this.stamina=100,this.staminaDelay=0,this.meds=0,this.keys=new Set,this.parts=new Set,this.ammo={pistol:0,shell:0,rifle:0,smg:0},this.crouching=!1,this.alive=!0,this.horizontalSpeed=0,this.slowTimer=0,this.footAcc=0,this.shake=0,this.shakeT=0,this.eyeH=xl,this.grounded=!1,this.exert=0,this.healCooldown=0,this.flashlight=new y0(16773592,0,26,.5,.45,1.2),this.flashOn=!1,t.camera.add(this.flashlight),this.flashTarget=new ae,this.flashTarget.position.set(0,0,-5),t.camera.add(this.flashTarget),this.flashlight.target=this.flashTarget,this.flashlight.position.set(.1,-.05,0)}reset(t){this.pos.set(t.x,t.y||.1,t.z),this.vel.set(0,0,0),this.yaw=t.yaw||0,this.pitch=0,this.hp=this.maxHp,this.stamina=this.maxStamina,this.alive=!0,this.crouching=!1,this.slowTimer=0,this.parts.clear(),this.setFlash(!1)}fullReset(){this.meds=0,this.keys.clear(),this.parts.clear(),this.ammo={pistol:0,shell:0,rifle:0,smg:0}}snapshot(){return{hp:this.hp,meds:this.meds,keys:[...this.keys],parts:[...this.parts],ammo:{...this.ammo},weapons:this.g.weapons.snapshot()}}restore(t){t&&(this.hp=Math.max(35,t.hp),this.meds=t.meds,this.keys=new Set(t.keys),this.parts=new Set(t.parts||[]),this.ammo={...t.ammo},this.g.weapons.restore(t.weapons))}get head(){return new T(this.pos.x,this.pos.y+this.eyeH,this.pos.z)}get center(){return new T(this.pos.x,this.pos.y+.9,this.pos.z)}setFlash(t){this.flashOn=t,this.flashlight.intensity=t?2.6:0,t!==void 0&&this.g.audio.play("click",{vol:.5})}useStamina(t){this.stamina=Math.max(0,this.stamina-t),this.staminaDelay=.9}addAmmo(t,e){this.ammo[t]=(this.ammo[t]||0)+e}heal(){this.meds<=0||this.hp>=this.maxHp||this.healCooldown>0||(this.meds--,this.hp=Math.min(this.maxHp,this.hp+Math.round(50*this.g.diff.healMul)),this.healCooldown=1.2,this.g.audio.play("heal",{vol:.9}),this.g.notify("회복팩 사용"))}damage(t,e=null,{silent:n=!1}={}){if(!(!this.alive||this.g.godmode)){if(t*=this.g.diff.dmgTaken,this.hp-=t,this.shake=Math.min(1,this.shake+.45),n||this.g.audio.play("hurt",{vol:.9}),e){const s=e.x-this.pos.x,r=e.z-this.pos.z,a=Math.hypot(s,r)||1,o=-Math.sin(this.yaw),l=-Math.cos(this.yaw),c=Math.cos(this.yaw),h=-Math.sin(this.yaw),d=(s*o+r*l)/a,u=(s*c+r*h)/a;this.g.hud.damageFrom(Math.atan2(u,d))}this.hp<=0&&(this.hp=0,this.alive=!1,this.g.gameOver())}}update(t){const e=this.g,n=e.input;if(!this.alive)return;this.healCooldown=Math.max(0,this.healCooldown-t),this.slowTimer=Math.max(0,this.slowTimer-t);const s=n.consumeMouse(),r=.0022*e.settings.data.sensitivity;this.yaw-=s.x*r,this.pitch-=s.y*r,this.pitch=pe.clamp(this.pitch,-1.45,1.45);const a=n.down("ControlLeft")||n.down("ControlRight")||n.down("KeyC");if(a!==this.crouching)if(a)this.crouching=!0;else{const it=new T(this.pos.x-Hi,this.pos.y+Ml,this.pos.z-Hi),lt=new T(this.pos.x+Hi,this.pos.y+yl,this.pos.z+Hi);let dt=!0;for(const At of e.world.colliders)if(At.enabled&&it.x<At.max.x&&lt.x>At.min.x&&it.y<At.max.y&&lt.y>At.min.y&&it.z<At.max.z&&lt.z>At.min.z){dt=!1;break}dt&&(this.crouching=!1)}const o=this.crouching?Ml:yl,l=this.crouching?j0:xl;this.eyeH+=(l-this.eyeH)*Math.min(1,t*10);let c=0,h=0;n.down("KeyW")&&(h-=1),n.down("KeyS")&&(h+=1),n.down("KeyA")&&(c-=1),n.down("KeyD")&&(c+=1);const d=c!==0||h!==0,f=(n.down("ShiftLeft")||n.down("ShiftRight"))&&d&&h<0&&!this.crouching&&this.stamina>1&&this.slowTimer<=0;f?this.useStamina(t*15):(this.staminaDelay-=t,this.staminaDelay<=0&&(this.stamina=Math.min(this.maxStamina,this.stamina+t*(d?9:15)))),this.sprinting=f,this.exert+=((f?1:0)-this.exert)*Math.min(1,t*1.2);let g=this.crouching?1.8:f?6:3.7;this.slowTimer>0&&(g*=.55);const _=e.weapons.ads||0;g*=1-_*.35;const p=Math.sin(this.yaw),m=Math.cos(this.yaw);let v=0,y=0;if(d){const it=Math.hypot(c,h),lt=c/it,dt=h/it;v=(lt*m+dt*p)*g,y=(-lt*p+dt*m)*g}const w=this.grounded?14:4;this.vel.x+=(v-this.vel.x)*Math.min(1,t*w),this.vel.z+=(y-this.vel.z)*Math.min(1,t*w);const D=12,E=Math.hypot(this.vel.x,this.vel.z);E>D&&(this.vel.x*=D/E,this.vel.z*=D/E),this.vel.y-=Y0*t,this.vel.y=Math.max(this.vel.y,-30);const R=this.vel.y,C=new T(this.vel.x*t,this.vel.y*t,this.vel.z*t),b=e.world.move(this.pos,Hi,o,C,{step:.45});if(this.grounded=b.grounded,b.grounded&&(R<-13?(this.damage((-R-13)*2.5,null),e.audio.play("land",{vol:1}),this.shake=Math.min(1,this.shake+.3)):R<-6&&e.audio.play("land",{vol:.5}),this.vel.y=-.5),b.hitCeil&&(this.vel.y=Math.min(this.vel.y,0)),this.horizontalSpeed=Math.hypot(this.vel.x,this.vel.z),this.grounded&&this.horizontalSpeed>.5){this.footAcc+=this.horizontalSpeed*t;const it=this.crouching?1.4:f?2.4:1.9;if(this.footAcc>=it){this.footAcc=0;const lt=this.crouching?.15:f?.55:.32;e.audio.play(e.metalFloor?"stepMetal":"step",{vol:lt,rate:.9+Math.random()*.25});const dt=this.crouching?2.5:f?15:7;e.emitNoise(this.pos,dt)}}n.pressed("KeyQ")&&this.heal(),n.pressed("KeyF")&&this.setFlash(!this.flashOn);const x=e.settings.data.shakeReduce?.35:1;this.shake=Math.max(0,this.shake-t*1.8),this.shakeT+=t*30;const P=Math.sin(this.shakeT*1.3)*this.shake*.02*x,B=Math.cos(this.shakeT*1.7)*this.shake*.015*x,F=Math.min(1,this.horizontalSpeed/4)*(this.grounded?1:0)*.05*x,V=e.weapons.bobT||0,q=Math.abs(Math.cos(V))*F*.6,H=Math.sin(V)*F*.3,Z=e.camera;Z.position.set(this.pos.x+H*m+P,this.pos.y+this.eyeH+q+B,this.pos.z-H*p),Z.rotation.order="YXZ",Z.rotation.y=this.yaw+(e.weapons.recoilYaw||0),Z.rotation.x=this.pitch+(e.weapons.recoilPitch||0)+B*2,Z.rotation.z=P*.5;const G=new T(m,0,-p);e.audio.setCamera(Z.position,G),e.audio.updateVitals(this.hp/this.maxHp,this.exert)}}const Sl={pistol:"9mm탄",shell:"산탄",rifle:"소총탄",smg:"SMG탄"},Wi={shovel:{type:"melee",name:"삽",slot:1,dmg:34,range:2.4,arc:1.2,rate:.8,stamina:14,knock:4.5,stagger:.55,windup:.22,headMul:1.5,maxTargets:2},axe:{type:"melee",name:"도끼",slot:1,dmg:62,range:2.2,arc:.75,rate:1.25,stamina:23,knock:3,stagger:.9,windup:.34,headMul:1.8,maxTargets:1},bat:{type:"melee",name:"야구방망이",slot:1,dmg:24,range:2.5,arc:1.5,rate:.5,stamina:9,knock:8,stagger:.45,windup:.16,headMul:1.5,maxTargets:3},pistol:{type:"gun",name:"권총",slot:2,ammo:"pistol",dmg:27,mag:12,rate:.3,reload:1.6,spread:.014,adsSpread:.3,f0:16,f1:45,headMul:2.5,noise:40,recoil:.03,kick:.05,auto:!1,adsZoom:.88},shotgun:{type:"gun",name:"산탄총",slot:3,ammo:"shell",dmg:12,pellets:8,mag:6,rate:.95,reload:.7,reloadPerShell:!0,spread:.05,adsSpread:.7,f0:7,f1:22,headMul:1.5,noise:50,recoil:.075,kick:.16,auto:!1,adsZoom:.9},rifle:{type:"gun",name:"사냥용 소총",slot:3,ammo:"rifle",dmg:95,mag:5,rate:1.35,reload:2.5,spread:.006,adsSpread:.08,f0:55,f1:130,headMul:3,noise:58,recoil:.09,kick:.2,auto:!1,adsZoom:.55},smg:{type:"gun",name:"기관단총",slot:4,ammo:"smg",dmg:15,mag:30,rate:.085,reload:2.1,spread:.03,adsSpread:.5,f0:12,f1:34,headMul:2,noise:42,recoil:.014,kick:.03,auto:!0,adsZoom:.85}},cn=()=>new T;class $0{constructor(t){this.g=t,this.owned=new Set,this.melee=null,this.longPref="shotgun",this.current=null,this.mags={},this.state="idle",this.stateT=0,this.cooldown=0,this.ads=0,this.fatigue=0,this.raiseTarget=null,this.shotsFired=0,this.kills=0,this.rig=new Me,this.rig.position.set(.28,-.26,-.5),t.camera.add(this.rig);const e=new Gs(16773853,.5,2.5);e.position.set(0,.3,.3),t.camera.add(e),this.models={};for(const n of Object.keys(Wi)){const s=J0(n);s.visible=!1,this.rig.add(s),this.models[n]=s}this.flash=new Gs(16761958,0,9),this.flash.position.set(.28,-.1,-1.1),t.camera.add(this.flash),this.flashMesh=new pt(new Kn(.22,.22),new Pi({color:16768392,transparent:!0,opacity:0,depthTest:!1})),this.flashMesh.position.set(.28,-.12,-1.05),t.camera.add(this.flashMesh),this.bobT=0,this.recoilPitch=0,this.recoilYaw=0,this.kickZ=0,this.swingAnim=0}get def(){return this.current?Wi[this.current]:null}get isGun(){return this.def&&this.def.type==="gun"}get reloading(){return this.state==="reloading"}reset(){this.owned.clear(),this.melee=null,this.current=null,this.mags={},this.state="idle",this.cooldown=0,this.ads=0,this.shotsFired=0,this.kills=0;for(const t of Object.values(this.models))t.visible=!1}snapshot(){return{owned:[...this.owned],melee:this.melee,current:this.current,mags:{...this.mags},longPref:this.longPref}}restore(t){this.reset(),t&&(t.owned.forEach(e=>this.owned.add(e)),this.melee=t.melee,this.mags={...t.mags},this.longPref=t.longPref||"shotgun",t.current&&this.owned.has(t.current)&&this.select(t.current,!0))}give(t,{notify:e=!0}={}){const n=Wi[t];if(!n)return;const s=!this.owned.has(t);n.type==="melee"?(this.owned.delete(this.melee),this.melee&&this.current===this.melee&&(this.current=null),this.melee=t,this.owned.add(t),e&&this.g.notify(`${n.name} 획득`),(!this.current||Wi[this.current]?.type==="melee")&&this.select(t,!this.current)):(this.owned.add(t),this.mags[t]===void 0&&(this.mags[t]=n.mag),(t==="shotgun"||t==="rifle")&&(this.longPref=t),e&&s&&this.g.notify(`${n.name} 획득`),this.current||this.select(t,!0)),this.g.audio.play("pickup",{vol:.8})}ownedList(){return["shovel","axe","bat","pistol","shotgun","rifle","smg"].filter(e=>this.owned.has(e))}select(t,e=!1){if(!((!this.owned.has(t)||this.current===t||this.state==="reloading"&&!e)&&this.current===t)&&this.owned.has(t))if(e){this.current=t,this.state="idle";for(const[n,s]of Object.entries(this.models))s.visible=n===t}else this.raiseTarget=t,this.state="switching",this.stateT=0}handleSlotKey(t){if(t===1&&this.melee)this.select(this.melee);else if(t===2&&this.owned.has("pistol"))this.select("pistol");else if(t===3){const e=this.owned.has("shotgun"),n=this.owned.has("rifle");if(e&&n){const s=this.current;s==="shotgun"?this.select("rifle"):s==="rifle"?this.select("shotgun"):this.select(this.longPref)}else e?this.select("shotgun"):n&&this.select("rifle")}else t===4&&this.owned.has("smg")&&this.select("smg")}cycle(t){const e=this.ownedList();if(!e.length)return;let n=e.indexOf(this.current);n=(n+t+e.length)%e.length,this.select(e[n])}startReload(){const t=this.def;if(!t||t.type!=="gun"||this.state==="reloading"||this.state==="switching")return;const e=this.g.player;if(!(this.mags[this.current]>=t.mag)){if((e.ammo[t.ammo]||0)<=0){this.g.audio.play("dry",{vol:.6});return}this.state="reloading",this.stateT=0,this.ads=Math.min(this.ads,.3),this.g.audio.play("reload",{vol:.8})}}_finishReloadStep(){const t=this.def,e=this.g.player;if(t.reloadPerShell){const n=t.mag-this.mags[this.current],s=e.ammo[t.ammo]||0;if(n>0&&s>0&&(this.mags[this.current]+=1,e.ammo[t.ammo]=s-1,this.g.audio.play("reload",{vol:.7,rate:1.2}),this.mags[this.current]<t.mag&&e.ammo[t.ammo]>0)){this.stateT=0;return}this.state="idle",this.g.audio.play("reloadEnd",{vol:.8})}else{const n=t.mag-this.mags[this.current],s=Math.min(n,e.ammo[t.ammo]||0);this.mags[this.current]+=s,e.ammo[t.ammo]-=s,this.state="idle",this.g.audio.play("reloadEnd",{vol:.8})}}currentSpread(){const t=this.def;if(!t||t.type!=="gun")return 0;const e=this.g.player;let n=t.spread;n*=pe.lerp(1,t.adsSpread,this.ads);const s=e.horizontalSpeed||0;return n*=1+Math.min(1.2,s/5)*.8,e.crouching&&(n*=.75),n}update(t){const e=this.g;e.player;const n=e.input;this.cooldown=Math.max(0,this.cooldown-t),this.fatigue=Math.max(0,this.fatigue-t*.5),n.pressed("Digit1")&&this.handleSlotKey(1),n.pressed("Digit2")&&this.handleSlotKey(2),n.pressed("Digit3")&&this.handleSlotKey(3),n.pressed("Digit4")&&this.handleSlotKey(4);const s=n.consumeWheel();s!==0&&this.cycle(s>0?1:-1),n.pressed("KeyR")&&this.startReload();const r=this.def,a=r&&r.type==="gun"&&n.mbDown(2)&&this.state!=="reloading"&&this.state!=="switching";this.ads+=((a?1:0)-this.ads)*Math.min(1,t*10);const o=e.settings.data.fov,l=r&&r.type==="gun"?o*pe.lerp(1,r.adsZoom,this.ads):o;if(e.camera.fov+=(l-e.camera.fov)*Math.min(1,t*12),e.camera.updateProjectionMatrix(),this.stateT+=t,this.state==="switching"){if(this.stateT>=.18&&this.raiseTarget){this.current=this.raiseTarget,this.raiseTarget=null;for(const[h,d]of Object.entries(this.models))d.visible=h===this.current}this.stateT>=.4&&(this.state="idle")}else if(this.state==="reloading"){const h=(r.reloadPerShell,r.reload);this.stateT>=h&&this._finishReloadStep(),r.reloadPerShell&&n.mbPressed(0)&&this.mags[this.current]>0&&(this.state="idle")}else this.state==="windup"&&this.stateT>=r.windup&&(this._meleeHit(),this.state="idle",this.cooldown=r.rate);r&&this.state==="idle"&&this.cooldown<=0&&!e.paused&&(r.type==="melee"?n.mbDown(0)&&this._meleeStart():(r.auto?n.mbDown(0):n.mbPressed(0))&&this._fireGun());const c=1/.25;this.recoilPitch-=this.recoilPitch*t*c,this.recoilYaw-=this.recoilYaw*t*c,this.kickZ-=this.kickZ*t*c,this.flash.intensity-=this.flash.intensity*t*c*3,this.flashMesh.material.opacity-=this.flashMesh.material.opacity*t*c*3,Math.abs(this.recoilPitch)<1e-4&&(this.recoilPitch=0),Math.abs(this.recoilYaw)<1e-4&&(this.recoilYaw=0),this._animate(t)}_meleeStart(){const t=this.def,e=this.g.player,n=t.stamina*(1+this.fatigue*.5);e.stamina<n*.4||(e.useStamina(n),this.fatigue=Math.min(1.6,this.fatigue+.45),this.state="windup",this.stateT=0,this.swingAnim=0,this.g.audio.play("swing",{vol:.7,rate:.9+Math.random()*.2}))}_meleeHit(){const t=this.g,e=this.def,n=t.camera,s=cn().setFromMatrixPosition(n.matrixWorld),r=cn().set(0,0,-1).applyQuaternion(n.quaternion),a=t.zombies.raycast(s,r,e.range+.4);let o=!1;const l=[];for(const h of t.zombies.list){if(!h.alive)continue;const d=cn().subVectors(h.center,s),u=d.length();u>e.range+h.radius||(d.normalize(),Math.acos(pe.clamp(r.dot(d),-1,1))>e.arc/2)||t.world.los(s,h.center)&&l.push({z:h,dist:u})}l.sort((h,d)=>h.dist-d.dist);let c=0;for(const h of l){if(c>=e.maxTargets)break;c++,o=!0;const d=a&&a.zombie===h.z&&a.headshot,u=e.dmg*(d?e.headMul:1),f=cn().subVectors(h.z.pos,t.player.pos).setY(0).normalize();h.z.damage(u,{dir:f,knock:e.knock,stagger:e.stagger*t.diff.staggerMul,headshot:d,point:d?h.z.headPos:h.z.center,source:"melee"}),t.audio.play("hitFlesh",{pos:h.z.pos,vol:1}),t.hud.hitmarker(!h.z.alive)}if(!o){const h=t.world.raycast(s,r,e.range);if(h){h.col.onDamage&&h.col.onDamage(e.dmg);const d=h.col.tag;t.audio.play(d==="door"||d==="crate"||d==="tree"?"hitWood":"hitWall",{pos:h.point,vol:.8}),t.particles.dust(h.point)}}t.emitNoise(t.player.pos,9)}_fireGun(){const t=this.g,e=this.def,n=t.player,s=t.camera;if(this.mags[this.current]<=0){t.audio.play("dry",{vol:.7}),this.cooldown=.3,this.startReload();return}this.mags[this.current]--,this.shotsFired++,this.cooldown=e.rate;const r=cn().setFromMatrixPosition(s.matrixWorld),a=cn().set(0,0,-1).applyQuaternion(s.quaternion),o=cn().set(1,0,0).applyQuaternion(s.quaternion),l=cn().set(0,1,0).applyQuaternion(s.quaternion),c=this.currentSpread(),h=e.pellets||1;for(let u=0;u<h;u++){const f=a.clone().addScaledVector(o,(Math.random()-.5)*2*c).addScaledVector(l,(Math.random()-.5)*2*c).normalize(),g=e.f1*1.6,_=t.zombies.raycast(r,f,g),p=t.world.raycast(r,f,g);if(_&&(!p||_.dist<p.dist)){const m=pe.clamp((_.dist-e.f0)/Math.max(1,e.f1-e.f0),0,1);let v=e.dmg*(1-.65*m);_.headshot&&(v*=e.headMul);const y=f.clone().setY(0).normalize();_.zombie.damage(v,{dir:y,knock:e.pellets?1.2:.6,stagger:_.headshot?.5:.22,headshot:_.headshot,point:_.point,source:"gun"}),t.particles.blood(_.point,y),t.hud.hitmarker(!_.zombie.alive)}else p&&(p.col.onDamage&&p.col.onDamage(e.dmg),t.particles.spark(p.point),Math.random()<.5&&t.audio.play("hitWall",{pos:p.point,vol:.4}))}t.audio.play("shot_"+this.current,{vol:1}),t.audio.play("shell",{vol:.3}),this.flash.intensity=2.6,this.flashMesh.material.opacity=.9,this.flashMesh.rotation.z=Math.random()*Math.PI,this.recoilPitch+=e.recoil*(.75+Math.random()*.5),this.recoilYaw+=e.recoil*(Math.random()-.5)*.6,this.kickZ+=e.kick;const d=cn().setFromMatrixPosition(s.matrixWorld).addScaledVector(o,.3).addScaledVector(a,.4);t.particles.shell(d,o),t.emitNoise(n.pos,e.noise*t.diff.detectMul)}_animate(t){const e=this.g,n=e.player;if(!(this.current?this.models[this.current]:null))return;const r=this.def,a=n.horizontalSpeed||0;this.bobT+=t*(4+a*1.6);const o=Math.min(1,a/4)*(1-this.ads*.85)*.014,l=Math.sin(this.bobT)*o,c=-Math.abs(Math.cos(this.bobT))*o,h=-.28*this.ads,d=.14*this.ads;let u=0;this.state==="switching"?u=.4*Math.sin(Math.min(1,this.stateT/.4)*Math.PI):this.state==="reloading"&&(u=.22+Math.sin(this.stateT*9)*.02);let f=0,g=0,_=0,p=0;if(r&&r.type==="melee"){const m=this.current==="bat";if(this.state==="windup"){const v=this.stateT/r.windup;m?(p=-.9*v,f=.3*v,g=.03*v,_=-.15*v):(f=-.9*v,g=.12*v)}else if(this.cooldown>0){const v=1-this.cooldown/r.rate;m?(p=v<.4?pe.lerp(-.9,1,v/.4):pe.lerp(1,0,(v-.4)/.6),f=v<.4?pe.lerp(.3,-.4,v/.4):pe.lerp(-.4,0,(v-.4)/.6),g=v<.4?pe.lerp(.03,-.08,v/.4):pe.lerp(-.08,0,(v-.4)/.6),_=v<.4?pe.lerp(-.15,.3,v/.4):pe.lerp(.3,0,(v-.4)/.6)):(f=v<.3?pe.lerp(-.9,1.1,v/.3):pe.lerp(1.1,0,(v-.3)/.7),g=v<.3?pe.lerp(.12,-.15,v/.3):pe.lerp(-.15,0,(v-.3)/.7))}}this.rig.position.set(.28+l+h+g,-.26+c+d-u,-.5-this.kickZ*.5+this.kickZ+_),this.rig.rotation.x=f*.9+this.kickZ*.6,this.rig.rotation.y=p,this.rig.rotation.z=f*-.25}}function Z0(i){return new Pe({color:i})}const mi=7033144,Rs=3026994,gi=5527644,bl=3813926;function J0(i){const t=new Me,e=(n,s,r,a,o,l=0,c=0,h=0)=>{const d=new pt(n,Z0(s));return d.position.set(r,a,o),d.rotation.set(l,c,h),t.add(d),d};switch(i){case"shovel":e(new ce(.022,.022,.9,6),mi,0,-.1,.1,1.2,0,.15),e(new Et(.16,.26,.02),gi,.05,.05,-.42,1.2,0,.15);break;case"axe":e(new ce(.024,.028,.8,6),mi,0,-.1,.05,1.25,0,.12),e(new Et(.22,.14,.035),gi,.04,.1,-.35,1.25,0,.12);break;case"bat":e(new ce(.045,.026,.85,8),mi,0,0,-.15,1.3,0,.1);break;case"pistol":e(new Et(.05,.09,.26),Rs,0,.03,-.1),e(new Et(.045,.12,.07),bl,0,-.06,.02,.25);break;case"shotgun":e(new ce(.026,.026,.62,8),gi,0,.04,-.3,Math.PI/2),e(new ce(.02,.02,.45,8),Rs,0,0,-.28,Math.PI/2),e(new Et(.055,.06,.16),mi,0,-.01,-.22),e(new Et(.06,.1,.3),mi,0,-.02,.12,-.08);break;case"rifle":e(new ce(.018,.018,.8,8),gi,0,.05,-.35,Math.PI/2),e(new Et(.05,.08,.55),mi,0,0,0,-.03),e(new ce(.03,.03,.14,8),Rs,0,.11,-.1,Math.PI/2);break;case"smg":e(new Et(.06,.1,.38),Rs,0,.02,-.12),e(new ce(.016,.016,.2,6),gi,0,.05,-.38,Math.PI/2),e(new Et(.04,.16,.06),gi,0,-.1,-.06,.15),e(new Et(.045,.1,.07),bl,0,-.07,.1,.25);break}return t}const Q0="modulepreload",tg=function(i,t){return new URL(i,t).href},wl={},eg=function(t,e,n){let s=Promise.resolve();if(e&&e.length>0){const a=document.getElementsByTagName("link"),o=document.querySelector("meta[property=csp-nonce]"),l=o?.nonce||o?.getAttribute("nonce");s=Promise.allSettled(e.map(c=>{if(c=tg(c,n),c in wl)return;wl[c]=!0;const h=c.endsWith(".css"),d=h?'[rel="stylesheet"]':"";if(!!n)for(let g=a.length-1;g>=0;g--){const _=a[g];if(_.href===c&&(!h||_.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${c}"]${d}`))return;const f=document.createElement("link");if(f.rel=h?"stylesheet":Q0,h||(f.as="script"),f.crossOrigin="",f.href=c,l&&f.setAttribute("nonce",l),document.head.appendChild(f),h)return new Promise((g,_)=>{f.addEventListener("load",g),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${c}`)))})}))}function r(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return s.then(a=>{for(const o of a||[])o.status==="rejected"&&r(o.reason);return t().catch(r)})};let Tl=null;const ta={walker:{hp:60,walk:.85,chase:1.9,dmg:12,atkRange:1.6,atkCd:1.5,sight:20,fov:2.6,hearMul:1,scale:1,height:1.7,radius:.36,skin:3824202,cloth:1709064},rotten:{hp:35,walk:1.1,chase:2.3,dmg:10,atkRange:1.5,atkCd:1.3,sight:18,fov:2.6,hearMul:1.1,scale:.94,height:1.62,radius:.33,skin:3820088,cloth:656904,lunge:!0},brute:{hp:250,walk:.65,chase:1.35,dmg:30,atkRange:1.9,atkCd:2.2,sight:17,fov:2.4,hearMul:.9,scale:1.28,height:2.05,radius:.52,skin:4872784,cloth:657926,heavy:!0,knockPlayer:9},screamer:{hp:45,walk:1,chase:2,dmg:10,atkRange:1.5,atkCd:1.4,sight:9,fov:2.2,hearMul:2.8,scale:.92,height:1.6,radius:.32,skin:4872776,cloth:2099226,screamer:!0},crawler:{hp:40,walk:.9,chase:2.3,dmg:8,atkRange:1.3,atkCd:1.2,sight:14,fov:2.8,hearMul:1.2,scale:1,height:.75,radius:.38,skin:2771504,cloth:657928,crawler:!0,slows:!0}},qn=()=>new T;let ng=qn(),Hr=qn();class ig{constructor(t,e){this.mgr=t,this.type=e,this.def=ta[e],this.pos=qn(),this.vel=qn(),this.yaw=0,this.body=dc(this.def),this.parts=this.body.userData.parts,this.alive=!1,this.state="idle",this.body.visible=!1,t.g.scene.add(this.body)}activate(t,e,{mode:n="idle",yaw:s=Math.random()*Math.PI*2,hpMul:r=1}={}){const a=this.def,o=this.mgr.g.diff;this.pos.set(t,.1,e),this.vel.set(0,0,0),this.yaw=s,this.hp=a.hp*r*(.9+Math.random()*.25),this.maxHp=this.hp,this.alive||this.mgr._aliveCount++,this.alive=!0,this.state=n==="lying"?"lying":n==="chase"?"chase":n,this.sight=a.sight*o.detectMul*(.9+Math.random()*.25),this.hearMul=a.hearMul*o.detectMul,this.speedMul=.88+Math.random()*.28,this.alertLevel=0,this.suspectPos=null,this.lastKnown=null,this.loseTimer=0,this.stateT=0,this.atkTimer=1+Math.random(),this.staggerT=0,this.avoidT=0,this.avoidDir=1,this.lungeCd=2,this.groanT=3+Math.random()*8,this.aiAcc=0,this.flash=0,this.corpseT=0,this.hasScreamed=!1,this.wanderTarget=null,this.attackWind=-1,this.fallenT=0,this.body.visible=!0,this.body.position.copy(this.pos),this.body.rotation.set(0,s,0),this.state==="chase"&&(this.lastKnown=this.mgr.g.player.pos.clone()),this.state==="lying"&&(this.body.rotation.x=-Math.PI/2,this.body.position.y=.25),sg(this.parts,this.def)}get center(){return ng.set(this.pos.x,this.pos.y+this.def.height*.55,this.pos.z).clone()}get headPos(){if(this.def.crawler){const t=this._facing();return qn().set(this.pos.x+t.x*.5,this.pos.y+.55,this.pos.z+t.z*.5)}return qn().set(this.pos.x,this.pos.y+this.def.height-.16*this.def.scale,this.pos.z)}get eye(){return qn().set(this.pos.x,this.pos.y+this.def.height*.88,this.pos.z)}get radius(){return this.def.radius}_facing(){return{x:Math.sin(this.yaw),z:Math.cos(this.yaw)}}hearNoise(t,e){if(!(!this.alive||this.state==="dead"||this.pos.distanceTo(t)>e*this.hearMul)){if(this.state==="lying"){this._wakeUp();return}if(this.state==="chase"||this.state==="attack"||this.state==="lunge"){this.lastKnown=t.clone();return}(this.state==="idle"||this.state==="wander"||this.state==="suspect")&&(this.suspectPos=t.clone(),this.state!=="suspect"&&(this.state="suspect",this.stateT=0,Math.random()<.5&&this.mgr.g.audio.play("groan",{pos:this.pos,vol:.5})),this.alertLevel=Math.min(.9,this.alertLevel+.35))}}_wakeUp(){this.state==="lying"&&(this.state="getup",this.stateT=0,this.mgr.g.audio.play("groan",{pos:this.pos,vol:.9}))}_enterChase(){if(this.state==="chase")return;const t=this.mgr.g;this.state="chase",this.stateT=0,this.lastKnown=t.player.pos.clone(),this.loseTimer=0,this.def.screamer&&!this.hasScreamed?(this.hasScreamed=!0,this.state="scream",this.stateT=0,t.audio.play("scream",{pos:this.pos,vol:1.2,range:60}),this.mgr.alertArea(this.pos,42)):this.def.heavy?(t.audio.play("roar",{pos:this.pos,vol:1.1}),this.mgr.alertArea(this.pos,14)):this.def.crawler?(t.audio.play("hiss",{pos:this.pos,vol:.9}),this.mgr.alertArea(this.pos,8)):(t.audio.play("groanAlert",{pos:this.pos,vol:.9}),this.mgr.alertArea(this.pos,12))}damage(t,{dir:e=null,knock:n=0,stagger:s=.3,headshot:r=!1,point:a=null,source:o=""}={}){if(!this.alive)return;const l=this.mgr.g;if(this.hp-=t,this.flash=.12,a&&l.particles.blood(a,e),this.hp<=0){this._die(e,n);return}this.state==="lying"?this._wakeUp():this.state!=="scream"&&(this.lastKnown=l.player.pos.clone(),this.state!=="chase"&&this.state!=="attack"&&this.state!=="lunge"&&this._enterChase()),e&&n>0&&!this.def.heavy&&(this.vel.x+=e.x*n,this.vel.z+=e.z*n);const c=this.def.heavy?.35:1;n>=6.5&&!this.def.heavy&&!this.def.crawler&&this.state!=="fallen"?(this.state="fallen",this.stateT=0,this.fallenT=1.4+Math.random()*.5,l.audio.play("zfall",{pos:this.pos,vol:.8})):s*c>.1&&this.state!=="fallen"&&(this.staggerT=Math.max(this.staggerT,s*c*(r?1.5:1)),this.state!=="stagger"&&this.state!=="scream"&&(this._preStagger=this.state==="attack"||this.state==="lunge"?"chase":this.state,this.state="stagger"))}_die(t,e){const n=this.mgr.g;this.alive=!1,this.state="dead",this.stateT=0,this.corpseT=11+Math.random()*3,this.mgr.kills++,this.mgr.stageKills++,n.audio.play("zdie",{pos:this.pos,vol:.9}),t&&e>0&&(this.vel.x+=t.x*2,this.vel.z+=t.z*2),Math.random()<.5&&n.kit.blood(this.pos.x,this.pos.z,.5+Math.random()*.4),this.mgr.onKill&&this.mgr.onKill(this)}update(t){const e=this.mgr.g,n=e.player,s=this.def;if(this.stateT+=t,this.flash>0&&(this.flash-=t,uc(this.parts,this.flash>0)),this.state==="dead"){const d=Math.min(1,this.stateT/.5);this.body.rotation.x=-Math.PI/2*d,this.body.position.y=pe.lerp(this.pos.y,.22,d),this.corpseT-=t,this.corpseT<1.5&&(this.body.position.y=.22-(1.5-this.corpseT)*.4),this.corpseT<=0&&this.mgr._recycle(this);return}if(this.state==="lying"){this.pos.distanceToSquared(n.pos)<3.2*3.2&&n.alive&&this._wakeUp();return}let r=0,a=0,o=0;switch(this.state){case"getup":{const d=Math.min(1,this.stateT/1.1);this.body.rotation.x=-Math.PI/2*(1-d),d>=1&&(this.body.rotation.x=0,this._enterChase());break}case"stagger":{this.staggerT-=t,this.staggerT<=0&&(this.state=this._preStagger||"chase",this.stateT=0);break}case"fallen":{this.fallenT-=t;const d=Math.min(1,this.stateT/.3);this.body.rotation.x=-Math.PI/2*d*.9,this.fallenT<=0&&(this.state="rise",this.stateT=0);break}case"rise":{const d=Math.min(1,this.stateT/1);this.body.rotation.x=-Math.PI/2*.9*(1-d),d>=1&&(this.body.rotation.x=0,this.state="chase",this.stateT=0);break}case"scream":{this.stateT>1.6&&(this.state="chase",this.stateT=0,this.lastKnown=n.pos.clone());break}case"idle":{this._perceive(t,n),this.stateT>4+Math.random()*4&&(this.state="wander",this.stateT=0);break}case"wander":{if(this._perceive(t,n),(!this.wanderTarget||this.pos.distanceToSquared(this.wanderTarget)<1||this.stateT>9)&&(this.wanderTarget=new T(this.pos.x+(Math.random()-.5)*14,0,this.pos.z+(Math.random()-.5)*14),this.stateT=0,Math.random()<.3)){this.state="idle",this.wanderTarget=null;break}if(this.wanderTarget){const d=this.wanderTarget.x-this.pos.x,u=this.wanderTarget.z-this.pos.z,f=Math.hypot(d,u);f>.5&&(r=d/f,a=u/f,o=s.walk*this.speedMul*.7)}this.groanT-=t,this.groanT<=0&&(this.groanT=7+Math.random()*10,e.audio.play("groan",{pos:this.pos,vol:.55}));break}case"suspect":{if(this._perceive(t,n),this.suspectPos){const d=this.suspectPos.x-this.pos.x,u=this.suspectPos.z-this.pos.z,f=Math.hypot(d,u);f>1.2?(r=d/f,a=u/f,o=s.walk*this.speedMul):(this.yaw+=t*1.2,this.stateT>3.5&&(this.state="wander",this.stateT=0,this.suspectPos=null,this.alertLevel=0))}else this.state="wander",this.stateT=0;break}case"chase":{if(!n.alive){this.state="wander";break}const d=this.pos.distanceTo(n.pos);let u=!1;if(this.losCheck=(this.losCheck||0)-t,this.losCheck<=0&&d<this.sight*1.6?(u=e.world.los(this.eye,n.head),this.losCheck=.2+Math.random()*.1):d<this.sight*1.6&&(u=this.lastKnown!==null),u?(this.lastKnown=n.pos.clone(),this.loseTimer=0):this.loseTimer+=t,this.loseTimer>7){this.state="suspect",this.suspectPos=this.lastKnown?this.lastKnown.clone():null,this.stateT=0;break}const f=this.lastKnown||n.pos,g=f.x-this.pos.x,_=f.z-this.pos.z,p=Math.hypot(g,_);if(this.lungeCd-=t,s.lunge&&u&&this.lungeCd<=0&&d>2.5&&d<7.5){this.state="lunge",this.stateT=0,this.lungeCd=5+Math.random()*2,e.audio.play("hiss",{pos:this.pos,vol:.9});break}this.atkTimer-=t;const m=Math.abs(n.pos.y-this.pos.y);if(d<s.atkRange&&m<1.3&&this.atkTimer<=0&&u){this.state="attack",this.stateT=0,this.attackWind=.38,e.audio.play("bite",{pos:this.pos,vol:.9});break}if(p<6&&this._blocked&&this.atkTimer<=0){const v=e.world.raycast(this.eye,Hr.set(g,0,_).normalize(),2.2);if(v&&(v.col.tag==="door"||v.col.tag==="window")&&v.col.onDamage){v.col.onDamage(14),this.atkTimer=s.atkCd*e.diff.atkCooldownMul*.8;break}}p>.4?(r=g/p,a=_/p,o=s.chase*this.speedMul):u||(this.state="suspect",this.suspectPos=null,this.stateT=0),this.groanT-=t,this.groanT<=0&&(this.groanT=4+Math.random()*5,e.audio.play("groan",{pos:this.pos,vol:.7,rate:1.15}));break}case"lunge":{const d=n.pos.x-this.pos.x,u=n.pos.z-this.pos.z,f=Math.hypot(d,u);f>.3&&(r=d/f,a=u/f,o=5.6),this.stateT>.55&&(this.state="chase",this.stateT=0),f<s.atkRange*.9&&(this.state="attack",this.stateT=0,this.attackWind=.2,e.audio.play("bite",{pos:this.pos,vol:.9}));break}case"attack":{if(this.attackWind>=0&&this.stateT>=this.attackWind){if(this.attackWind=-1,this.pos.distanceTo(n.pos)<s.atkRange+.5&&n.alive){if(n.damage(s.dmg,this.pos),s.knockPlayer){const u=Hr.set(n.pos.x-this.pos.x,0,n.pos.z-this.pos.z).normalize();n.vel.x+=u.x*s.knockPlayer,n.vel.z+=u.z*s.knockPlayer,n.vel.y+=2}s.slows&&(n.slowTimer=2.4)}this.atkTimer=s.atkCd*e.diff.atkCooldownMul}this.stateT>.7&&(this.state="chase",this.stateT=0);break}}const l=o>0;if(l){if(this.avoidT>0){this.avoidT-=t;const g=-a*this.avoidDir,_=r*this.avoidDir;r=r*.35+g*.65,a=a*.35+_*.65}let u=Math.atan2(r,a)-this.yaw;for(;u>Math.PI;)u-=Math.PI*2;for(;u<-Math.PI;)u+=Math.PI*2;this.yaw+=pe.clamp(u,-t*4,t*4);const f=this._facing();this.vel.x+=(f.x*o-this.vel.x)*Math.min(1,t*6),this.vel.z+=(f.z*o-this.vel.z)*Math.min(1,t*6)}else this.vel.x*=Math.pow(.02,t),this.vel.z*=Math.pow(.02,t);this.vel.y-=24*t;const c=Hr.set(this.vel.x*t,this.vel.y*t,this.vel.z*t),h=e.world.move(this.pos,s.radius,s.height,c,{step:.5});h.grounded&&(this.vel.y=-.5),this._blocked=h.blockedH,h.blockedH&&l&&this.avoidT<=0&&(this.avoidT=.6+Math.random()*.5,this.avoidDir=Math.random()<.5?1:-1),this.body.position.copy(this.pos),this.state!=="fallen"&&this.state!=="rise"&&this.state!=="getup"&&this.state!=="dead"?this.body.rotation.set(0,this.yaw,0):this.body.rotation.y=this.yaw,this.mgr._animOK&&rg(this,t,l,o)}_perceive(t,e){if(!e.alive)return;const n=this.mgr.g,s=this.pos.distanceTo(e.pos);let r=this.sight;if(e.crouching&&(r*=.55),e.flashOn&&(r*=1.3),s>r){this.alertLevel=Math.max(0,this.alertLevel-t*.3);return}const a=this._facing(),o=(e.pos.x-this.pos.x)/s,l=(e.pos.z-this.pos.z)/s;if(a.x*o+a.z*l<Math.cos(this.def.fov/2)&&s>2.2||!n.world.los(this.eye,e.head))return;const h=.6+(1-s/r)*2.6+(e.sprinting?.8:0);this.alertLevel+=h*t,this.alertLevel>=1&&this._enterChase()}}function El(i){return new Pe({color:i})}function dc(i){const t=i.scale,e=new Me,n=El(i.skin),s=El(i.cloth),r={skinMat:n,clothMat:s};if(i.crawler){const a=new pt(new Et(.5,.32,.9),s);a.position.set(0,.35,0),e.add(a),r.torso=a;const o=new pt(new Et(.3,.3,.3),n);o.position.set(0,.42,.55),e.add(o),r.head=o;for(const l of[-1,1]){const c=new pt(new Et(.14,.14,.6),n);c.position.set(l*.32,.22,.3),e.add(c),r[l<0?"armL":"armR"]=c;const h=new pt(new Et(.16,.14,.7),s);h.position.set(l*.18,.15,-.55),e.add(h),r[l<0?"legL":"legR"]=h}}else{const a=new pt(new Et(.52*t,.68*t,.3*t),s);a.position.set(0,1.05*t,0),e.add(a),r.torso=a;const o=new pt(new Et(.3*t,.32*t,.3*t),n);o.position.set(0,1.56*t,0),o.rotation.x=.15,e.add(o),r.head=o;for(const l of[-1,1]){const c=new Me;c.position.set(l*.33*t,1.32*t,0);const h=new pt(new Et(.13*t,.62*t,.13*t),n);h.position.y=-.31*t,c.add(h),e.add(c),r[l<0?"armL":"armR"]=c;const d=new Me;d.position.set(l*.14*t,.72*t,0);const u=new pt(new Et(.17*t,.72*t,.17*t),s);u.position.y=-.36*t,d.add(u),e.add(d),r[l<0?"legL":"legR"]=d}}return e.userData.parts=r,e}function sg(i,t){t.crawler||(i.armL.rotation.set(0,0,0),i.armR.rotation.set(0,0,0),i.legL.rotation.set(0,0,0),i.legR.rotation.set(0,0,0),i.torso.rotation.set(0,0,0)),uc(i,!1)}function uc(i,t){const e=t?5574929:0;i.skinMat.emissive.setHex(e),i.clothMat.emissive.setHex(e)}function rg(i,t,e,n){const s=i.parts,r=i.def;i.animT=(i.animT||0)+t*(e?3.5+n*2.2:.8);const a=i.animT,o=i.state==="chase"||i.state==="lunge";if(r.crawler){const c=e?Math.sin(a*2)*.25:0;s.armL.position.z=.3+c*.5,s.armR.position.z=.3-c*.5,s.torso.position.y=.35+Math.abs(Math.sin(a))*.04;return}const l=e?Math.sin(a)*.5:Math.sin(a)*.05;if(s.legL.rotation.x=l,s.legR.rotation.x=-l,i.state==="attack"){const c=Math.min(1,i.stateT/Math.max(.05,i.attackWind>=0?i.attackWind:.3)),h=i.attackWind>=0?-1.9*c:-1.9+2.4*Math.min(1,i.stateT*3);s.armL.rotation.x=h,s.armR.rotation.x=h}else o?(s.armL.rotation.x=-1.25+Math.sin(a)*.16,s.armR.rotation.x=-1.25-Math.sin(a)*.16):(s.armL.rotation.x=l*.5+.06,s.armR.rotation.x=-l*.5+.06);i.state==="stagger"?s.torso.rotation.x=-.35*Math.min(1,i.staggerT*3):i.state==="scream"?(s.torso.rotation.x=-.25,s.head.rotation.x=-.5):(s.torso.rotation.x=o?.14:.06,s.head.rotation.x=.15,s.torso.rotation.z=Math.sin(a*.5)*.05)}class ag{constructor(t){this.g=t,this.list=[],this.pool={walker:[],rotten:[],brute:[],screamer:[],crawler:[]},this.kills=0,this.stageKills=0,this.trickle=null,this.trickleT=0,this.onKill=null,this._animOK=!0,this._frame=0,this.decorList=[],this._aliveCount=0,this.initModelLoader().catch(e=>{})}get maxActive(){return this.g.settings.perf.maxZombies}clear(){for(const t of this.list)t.alive=!1,t.body.visible=!1,this.pool[t.type].push(t);this.list.length=0,this.trickle=null,this.stageKills=0,this.onKill=null,this.decorList.length=0,this._aliveCount=0}aliveCount(){return this._aliveCount}aliveNear(t,e){const n=e*e;return this.list.reduce((s,r)=>s+(r.alive&&r.pos.distanceToSquared(t)<n?1:0),0)}async initModelLoader(){if(!Tl)try{Tl=await eg(()=>import("./modelLoader-M4_fChx9.js"),[],import.meta.url),console.log("[Zombie] Model loader initialized")}catch(t){console.warn("[Zombie] Failed to load model loader:",t.message)}}spawn(t,e,n,s={}){if(ta[t]||(t="walker"),this.aliveCount()>=this.maxActive&&!s.force)return null;let r=this.pool[t].pop();return r||(r=new ig(this,t)),r.activate(e,n,s),this.list.includes(r)||this.list.push(r),r}wave(t,e,n,s,r=null,a={}){const o=Math.max(1,Math.round(t*this.g.diff.countMul)),l=[];for(let c=0;c<o;c++){const h=r?r[Math.floor(Math.random()*r.length)]:"walker",d=c/o*Math.PI*2+Math.random(),u=s*(.75+Math.random()*.5),f=this.spawn(h,e+Math.sin(d)*u,n+Math.cos(d)*u,{mode:"chase",...a});f&&l.push(f)}return l}onNoise(t,e){for(const n of this.list)n.alive&&n.hearNoise(t,e)}alertArea(t,e){for(const n of this.list){if(!n.alive||n.state==="chase"||n.state==="dead")continue;n.pos.distanceTo(t)<e*n.hearMul&&(n.suspectPos=this.g.player.alive?this.g.player.pos.clone():t.clone(),n.state==="lying"?n._wakeUp():(n.state==="idle"||n.state==="wander")&&(n.state="suspect",n.stateT=0))}}setTrickle(t){this.trickle=t,this.trickleT=t?t.interval:0}raycast(t,e,n){let s=null;for(const r of this.list){if(!r.alive||r.pos.distanceTo(t)-2>n)continue;const o=r.headPos,l=.2*r.def.scale,c=Ws(t,e,o,l,n),h=r.pos.clone();let d;r.def.crawler||r.state==="dead"||r.state==="lying"||r.state==="fallen"?d=Ws(t,e,r.center,Math.max(.5,r.def.radius*1.5),n):d=H0(t,e,h,r.def.height,r.def.radius,n);let u=null,f=!1;c!==null&&(d===null||c<=d+.05)?(u=c,f=!0):d!==null&&(u=d),u!==null&&(s===null||u<s.dist)&&(s={zombie:r,dist:u,headshot:f,point:new T(t.x+e.x*u,t.y+e.y*u,t.z+e.z*u)})}if(s){const r=this.g.world.raycast(t,e,s.dist);if(r&&r.dist<s.dist-.05)return null}return s}decor(t,e,n,s){const r=this.g;for(let a=0;a<t;a++){const o=dc(ta.walker),l=e+(Math.random()-.5)*s*2,c=n+(Math.random()-.5)*s*2;o.position.set(l,0,c),o.rotation.y=Math.random()*Math.PI*2,r.levelGroup.add(o),this.decorList.push({body:o,t:Math.random()*10,x:l,z:c})}}_recycle(t){t.alive&&(t.alive=!1,this._aliveCount--),t.body.visible=!1,this.pool[t.type].push(t)}update(t){this._frame++;const e=this.g.player;if(this.g.settings.perf,this.trickle&&e.alive&&(this.trickleT-=t,this.trickleT<=0&&(this.trickleT=this.trickle.interval*(.7+Math.random()*.6),this.aliveCount()<Math.min(this.trickle.maxAlive,this.maxActive)))){const n=Math.random()*Math.PI*2,s=this.trickle.minDist+Math.random()*(this.trickle.maxDist-this.trickle.minDist),r=this.trickle.types||["walker"];this.spawn(r[Math.floor(Math.random()*r.length)],e.pos.x+Math.sin(n)*s,e.pos.z+Math.cos(n)*s,{mode:"suspect"})}for(const n of this.list){const s=n.pos.distanceToSquared(e.pos);let r=0;if(s>80*80&&n.state!=="chase"||(s>50*50?r=3:s>28*28&&(r=1),n.aiAcc+=t,r>0&&(this._frame+n.body.id)%(r+1)!==0))continue;this._animOK=s<55*55;const a=n.aiAcc;n.aiAcc=0,n.update(Math.min(a,.12))}if(!(this._frame&3)){const n=[];for(const s of this.list)s.alive&&s.pos.distanceToSquared(e.pos)<32*32&&s.state!=="dead"&&s.state!=="lying"&&n.push(s);for(let s=0;s<n.length;s++)for(let r=s+1;r<n.length;r++){const a=n[s],o=n[r],l=o.pos.x-a.pos.x,c=o.pos.z-a.pos.z,h=l*l+c*c,d=(a.radius+o.radius)*.95;if(h<d*d&&h>1e-4){const u=Math.sqrt(h),f=(d-u)/u*.5;a.pos.x-=l*f,a.pos.z-=c*f,o.pos.x+=l*f,o.pos.z+=c*f}}}for(const n of this.decorList){n.t+=t,n.body.rotation.y+=Math.sin(n.t*.3)*t*.2,n.body.position.x=n.x+Math.sin(n.t*.4)*.8,n.body.position.z=n.z+Math.cos(n.t*.31)*.8;const s=n.body.userData.parts,r=Math.sin(n.t*2.2)*.3;s.legL.rotation&&(s.legL.rotation.x=r,s.legR.rotation.x=-r)}}}class og{constructor(t){this.g=t,this.items=[],this.holdT=0,this.holdTarget=null}clear(){this.items.length=0,this.holdT=0,this.holdTarget=null}add(t){const e={pos:t.pos.clone?t.pos.clone():new T(t.pos.x,t.pos.y,t.pos.z),radius:t.radius||2.2,prompt:t.prompt,hold:t.hold||0,onUse:t.onUse,onHoldTick:t.onHoldTick||null,canUse:t.canUse||null,once:t.once||!1,enabled:!0,mesh:t.mesh||null,bob:t.bob||!1,baseY:t.mesh?t.mesh.position.y:0,bobT:Math.random()*6};return this.items.push(e),e.remove=()=>{e.enabled=!1;const n=this.items.indexOf(e);n>=0&&this.items.splice(n,1),e.mesh&&this.g.levelGroup.remove(e.mesh)},e}pickup(t,e,n,s,r={}){const a=this.g,o=a.mats;let l,c,h;const d=new Me;switch(d.position.set(e,n,s),t){case"ammo":{const g=Math.max(1,Math.round((r.amount||10)*a.diff.resourceMul));l=new pt(new Et(.34,.2,.24),o.ammoBoxMat),c=`${Sl[r.ammoType]} ×${g}`,h=()=>{a.player.addAmmo(r.ammoType,g),a.notify(`${Sl[r.ammoType]} +${g}`),a.audio.play("pickup",{vol:.8})};break}case"medkit":{l=new pt(new Et(.36,.16,.3),o.medBoxMat);const g=new pt(new Et(.16,.17,.05),new Pi({color:9187106}));g.position.z=.13,l.add(g),c="회복팩",h=()=>{a.player.meds++,a.notify("회복팩 획득 [Q]로 사용"),a.audio.play("pickup",{vol:.8})};break}case"weapon":{l=new pt(new Et(.7,.14,.2),o.weaponPickup),c=(r.label||"무기")+" 줍기",h=()=>{a.weapons.give(r.id)};break}case"key":{l=new pt(new Et(.1,.05,.22),o.keyMat),c=r.label||"열쇠",h=()=>{a.player.keys.add(r.keyId),a.notify(`${r.label||"열쇠"} 획득`),a.audio.play("key",{vol:.9})};break}case"fuel":{l=new pt(new Et(.35,.45,.22),o.fuelMat),c=r.label||"연료통",h=()=>{a.player.parts.add(r.id||"fuel"),a.notify(`${r.label||"연료통"} 획득`),a.audio.play("pickup",{vol:.9})};break}case"part":{l=new pt(new Et(.3,.25,.3),o.partMat),c=r.label||"부품",h=()=>{a.player.parts.add(r.id),a.notify(`${r.label} 획득`),a.audio.play("pickup",{vol:.9})};break}case"note":{l=new pt(new Et(.3,.02,.4),o.noteMat),c=r.label||"메모 읽기",h=()=>{a.showNote(r.title||"메모",r.body||""),a.audio.play("click",{vol:.6})};break}}d.add(l),a.levelGroup.add(d);const u=t==="note",f=this.add({pos:new T(e,n,s),radius:2,prompt:c,mesh:d,bob:!0,onUse:()=>{h(),u||f.remove(),r.onPickup&&r.onPickup()}});return f}update(t){const e=this.g,n=e.player,s=e.input;if(!n.alive){e.hud.prompt(null);return}for(const h of this.items)h.bob&&h.mesh&&(h.bobT+=t,h.mesh.position.y=h.pos.y+Math.sin(h.bobT*2)*.05,h.mesh.rotation.y+=t*.8);const r=n.head,a=new T(0,0,-1).applyQuaternion(e.camera.quaternion);let o=null,l=-1;for(const h of this.items){if(!h.enabled)continue;const d=new T().subVectors(h.pos,r),u=d.length();if(u>h.radius)continue;d.normalize();const f=a.dot(d);if(u>1&&f<.35||!e.world.los(r,h.pos)&&u>1.2&&h.radius<5)continue;const g=f*2-u*.3;g>l&&(l=g,o=h)}if(!o){e.hud.prompt(null),this.holdT=0,this.holdTarget=null;return}let c=typeof o.prompt=="function"?o.prompt():o.prompt;if(o.canUse){const h=o.canUse();if(typeof h=="string")c=h;else if(h===!1){e.hud.prompt(null);return}}if(c==null){e.hud.prompt(null);return}o.hold>0?(s.down("KeyE")?(this.holdTarget!==o&&(this.holdTarget=o,this.holdT=0),(!o.canUse||o.canUse()===!0)&&(this.holdT+=t,o.onHoldTick&&o.onHoldTick(t,this.holdT/o.hold),this.holdT>=o.hold&&(this.holdT=0,this.holdTarget=null,o.onUse(),o.once&&o.remove()))):this.holdT=Math.max(0,this.holdT-t*2),e.hud.prompt(c,this.holdT/o.hold)):(e.hud.prompt(c),s.pressed("KeyE")&&(!o.canUse||o.canUse()===!0?(o.onUse(),o.once&&o.remove()):e.audio.play("doorLocked",{vol:.6})))}}const ie=i=>document.getElementById(i);class lg{constructor(t){this.g=t,this.el=ie("hud"),this.hpFill=ie("hp-fill"),this.stFill=ie("st-fill"),this.medsCount=ie("meds-count"),this.weaponName=ie("weapon-name"),this.ammoMag=ie("ammo-mag"),this.ammoReserve=ie("ammo-reserve"),this.reloadHint=ie("reload-hint"),this.objText=ie("objective-text"),this.objBox=ie("objective-box"),this.notifyStack=ie("notify-stack"),this.promptEl=ie("interact-prompt"),this.promptText=ie("interact-text"),this.holdBar=ie("interact-hold"),this.holdFill=ie("interact-hold-fill"),this.vignette=ie("vignette"),this.lowhp=ie("lowhp-overlay"),this.hitmarkerEl=ie("hitmarker"),this.crosshair=ie("crosshair"),this.dmgEls={n:ie("dmg-n"),e:ie("dmg-e"),s:ie("dmg-s"),w:ie("dmg-w")},this.fadeEl=ie("fade"),this.noteOverlay=ie("note-overlay"),this.tabOverlay=ie("tab-overlay"),this._vignetteT=0}show(t){this.el.classList.toggle("hidden",!t)}setObjective(t,e=!0){this.objText.textContent=t||"",e&&t&&(this.objBox.classList.remove("flash"),this.objBox.offsetWidth,this.objBox.classList.add("flash"))}notify(t){const e=document.createElement("div");for(e.className="notify",e.textContent=t,this.notifyStack.appendChild(e);this.notifyStack.children.length>5;)this.notifyStack.firstChild.remove();setTimeout(()=>{e.classList.add("out"),setTimeout(()=>e.remove(),700)},3200)}prompt(t,e=null){if(!t){this.promptEl.classList.add("hidden");return}this.promptEl.classList.remove("hidden"),this.promptText.textContent=t,e!==null?(this.holdBar.classList.add("active"),this.holdFill.style.width=`${Math.min(100,e*100)}%`):this.holdBar.classList.remove("active")}damageFrom(t){const e=t;let n;Math.abs(e)<Math.PI/4?n="n":Math.abs(e)>Math.PI*3/4?n="s":n=e>0?"e":"w";const s=this.dmgEls[n];s.style.transition="none",s.style.opacity="1",s.offsetWidth,s.style.transition="opacity .8s",s.style.opacity="0",this._vignetteT=.7}hitmarker(t){const e=this.hitmarkerEl;e.classList.toggle("kill",t),e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}fade(t,e=!1){e?(this.fadeEl.style.transition="none",this.fadeEl.style.opacity=String(t),this.fadeEl.offsetWidth,this.fadeEl.style.transition="opacity .5s"):this.fadeEl.style.opacity=String(t)}showNote(t,e){document.getElementById("note-title").textContent=t,document.getElementById("note-body").textContent=e,this.noteOverlay.classList.remove("hidden")}hideNote(){this.noteOverlay.classList.add("hidden")}get noteOpen(){return!this.noteOverlay.classList.contains("hidden")}showTab(){const t=this.g,e=t.player,n=t.weapons;document.getElementById("tab-objective").textContent=t.currentObjectiveText||"-";const s=n.ownedList().map(l=>{const c=Wi[l],h=n.current===l?"▶ ":"";return c.type==="gun"?`${h}${c.name} [${n.mags[l]||0}발]`:`${h}${c.name}`});document.getElementById("tab-weapons").innerHTML=s.length?s.join("<br>"):"없음";const r=[],a={pistol:"9mm탄",shell:"산탄",rifle:"소총탄",smg:"SMG탄"};for(const[l,c]of Object.entries(e.ammo))c>0&&r.push(`${a[l]}: ${c}`);document.getElementById("tab-ammo").innerHTML=r.length?r.join("<br>"):"없음";const o=[`회복팩 ×${e.meds}`];e.keys.size&&o.push(`열쇠 ${e.keys.size}개`);for(const l of e.parts)o.push(t.partLabels?.[l]||l);document.getElementById("tab-items").innerHTML=o.join("<br>"),this.tabOverlay.classList.remove("hidden")}hideTab(){this.tabOverlay.classList.add("hidden")}update(t){const e=this.g,n=e.player,s=e.weapons;this.hpFill.style.width=`${Math.max(0,n.hp/n.maxHp*100)}%`,this.stFill.style.width=`${Math.max(0,n.stamina/n.maxStamina*100)}%`,this.medsCount.textContent=String(n.meds);const r=s.def;if(r&&r.type==="gun"){this.weaponName.textContent=r.name,this.ammoMag.textContent=String(s.mags[s.current]??0),this.ammoReserve.textContent=String(n.ammo[r.ammo]??0);const h=(s.mags[s.current]??0)===0&&(n.ammo[r.ammo]??0)>0;this.reloadHint.classList.toggle("hidden",!h||s.reloading)}else r?(this.weaponName.textContent=r.name,this.ammoMag.textContent="—",this.ammoReserve.textContent="",this.reloadHint.classList.add("hidden")):(this.weaponName.textContent="맨손",this.ammoMag.textContent="—",this.ammoReserve.textContent="",this.reloadHint.classList.add("hidden"));const o=4+(s.currentSpread?s.currentSpread():0)*900;for(const[h,d]of[["ch-t",["top",-o-8]],["ch-b",["top",o]],["ch-l",["left",-o-8]],["ch-r",["left",o]]]){const u=this.crosshair.querySelector("."+h);u.style[d[0]]=`${d[1]}px`}const l=s.ads||0;this.crosshair.style.opacity=String(1-l*.55),this._vignetteT=Math.max(0,this._vignetteT-t),this.vignette.style.opacity=String(Math.min(1,this._vignetteT*1.4)),n.hp/n.maxHp<.35&&n.alive?this.lowhp.classList.add("beating"):(this.lowhp.classList.remove("beating"),this.lowhp.style.opacity="0")}}const bt=i=>document.getElementById(i),Gr=["menu-main","menu-options","menu-controls","screen-intro","screen-pause","screen-dead","screen-clear","screen-ending"],Al=["좀비는 소리에 반응한다. 총성은 최후의 수단으로.","앉아서 이동하면 발소리가 거의 나지 않는다.","머리를 노려라. 탄약은 언제나 부족하다.","문을 닫으면 좀비를 잠시 막을 수 있다.","야구방망이의 넉백으로 좀비를 넘어뜨릴 수 있다.","스태미나가 바닥나면 도망칠 수 없다. 항상 여유를 남겨라.","붉은 드럼통은 쏘면 폭발한다. 무리 한복판에서.","막다른 곳을 탐색하면 보급품이 있을 때가 많다."];class cg{constructor(t){this.g=t,this.on={},this.optionsReturn="menu-main",this.selectedDiff="normal",this._wire()}show(t){for(const e of Gr)bt(e).classList.toggle("hidden",e!==t)}hideAll(){for(const t of Gr)bt(t).classList.add("hidden")}get anyOpen(){return Gr.some(t=>!bt(t).classList.contains("hidden"))}_wire(){const t=this.g;bt("btn-new").addEventListener("click",()=>{t.audio.ensure(),this.on.newGame?.(this.selectedDiff)}),bt("btn-continue").addEventListener("click",()=>{t.audio.ensure(),this.on.continue?.()}),bt("btn-options").addEventListener("click",()=>{this.optionsReturn="menu-main",this._syncOptions(),this.show("menu-options")}),bt("btn-controls").addEventListener("click",()=>{this.controlsReturn="menu-main",this.show("menu-controls")}),document.querySelectorAll(".dbtn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".dbtn").forEach(s=>s.classList.remove("selected")),n.classList.add("selected"),this.selectedDiff=n.dataset.diff})}),bt("btn-options-back").addEventListener("click",()=>{t.settings.save(),this.show(this.optionsReturn)}),bt("btn-controls-back").addEventListener("click",()=>this.show(this.controlsReturn||"menu-main"));const e=(n,s,r=a=>a.toFixed(2))=>{const a=bt(n),o=bt(n+"-v");a.addEventListener("input",()=>{t.settings.data[s]=parseFloat(a.value),o&&(o.textContent=r(parseFloat(a.value))),t.audio.applyVolumes()})};e("opt-sens","sensitivity"),e("opt-master","volMaster"),e("opt-sfx","volSfx"),e("opt-music","volMusic"),e("opt-fov","fov",n=>String(Math.round(n))),bt("opt-shake").addEventListener("change",n=>{t.settings.data.shakeReduce=n.target.checked}),document.querySelectorAll(".pbtn").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll(".pbtn").forEach(s=>s.classList.remove("selected")),n.classList.add("selected"),t.settings.data.perf=n.dataset.perf,t.settings.save(),t.applyPerf()})}),bt("btn-resume").addEventListener("click",()=>this.on.resume?.()),bt("btn-restart-cp").addEventListener("click",()=>this.on.restartCp?.()),bt("btn-pause-options").addEventListener("click",()=>{this.optionsReturn="screen-pause",this._syncOptions(),this.show("menu-options")}),bt("btn-pause-controls").addEventListener("click",()=>{this.controlsReturn="screen-pause",this.show("menu-controls")}),bt("btn-quit").addEventListener("click",()=>this.on.quitToMenu?.()),bt("btn-dead-restart").addEventListener("click",()=>this.on.restartCp?.()),bt("btn-dead-menu").addEventListener("click",()=>this.on.quitToMenu?.()),bt("btn-next-stage").addEventListener("click",()=>this.on.nextStage?.()),bt("btn-clear-menu").addEventListener("click",()=>this.on.quitToMenu?.()),bt("btn-ending-menu").addEventListener("click",()=>this.on.quitToMenu?.()),bt("screen-intro").addEventListener("click",()=>{if(this._introCb){const n=this._introCb;this._introCb=null,n()}})}_syncOptions(){const t=this.g.settings.data;bt("opt-sens").value=t.sensitivity,bt("opt-sens-v").textContent=t.sensitivity.toFixed(2),bt("opt-master").value=t.volMaster,bt("opt-master-v").textContent=t.volMaster.toFixed(2),bt("opt-sfx").value=t.volSfx,bt("opt-sfx-v").textContent=t.volSfx.toFixed(2),bt("opt-music").value=t.volMusic,bt("opt-music-v").textContent=t.volMusic.toFixed(2),bt("opt-fov").value=t.fov,bt("opt-fov-v").textContent=String(Math.round(t.fov)),bt("opt-shake").checked=t.shakeReduce,document.querySelectorAll(".pbtn").forEach(e=>e.classList.toggle("selected",e.dataset.perf===t.perf))}refreshMain(){const t=this.g,e=t.save.load();bt("btn-continue").classList.toggle("hidden",!e);const n=t.save.unlocked();if(bt("stage-select-row").classList.toggle("hidden",n<=1),n>1){const r=bt("stage-buttons");r.innerHTML="";for(let a=1;a<=5;a++){const o=document.createElement("button");o.textContent=String(a),o.disabled=a>n,o.addEventListener("click",()=>{t.audio.ensure(),this.on.stage?.(a)}),r.appendChild(o)}}e?.difficulty&&(this.selectedDiff=e.difficulty,document.querySelectorAll(".dbtn").forEach(r=>r.classList.toggle("selected",r.dataset.diff===e.difficulty)))}showIntro(t,e){bt("intro-stage-no").textContent=`— 스테이지 ${t.id} —`,bt("intro-title").textContent=t.name,bt("intro-text").textContent=t.intro,this._introCb=e,this.show("screen-intro")}showDead(){bt("dead-tip").textContent=Al[Math.floor(Math.random()*Al.length)],this.show("screen-dead")}showClear(t){bt("clear-stats").textContent=t,this.show("screen-clear"),bt("btn-next-stage").textContent=this.g.stageIndex>=5?"엔딩 보기":"계속 이동한다"}showEnding(t,e){this.show("screen-ending");const n=bt("ending-text");n.textContent="",bt("btn-ending-menu").classList.add("hidden");const s=t.split(`
`);let r=0;const a=()=>{r<s.length?(n.textContent+=(r>0?`
`:"")+s[r],r++,this._endTimer=setTimeout(a,1700)):(bt("btn-ending-menu").classList.remove("hidden"),e?.())};a()}}const hg={id:1,name:"고립된 농가",intro:`눈을 떴을 때, 세상은 이미 조용해진 뒤였다.
라디오는 사흘 전부터 같은 말만 반복한다.

이 농가에 더 머물 수는 없다.
헛간의 낡은 트럭이 움직여 준다면, 남쪽으로.

우선 몸을 지킬 것부터 찾아야 한다.`,fog:{color:2760479,near:12,far:75},hemi:[4863285,1707791,.6],sun:{color:9132604,intensity:.35,dir:[40,50,25]},ambience:{wind:1,crickets:.8,creaks:.5,moans:.35},music:0,playerSpawn:{x:2.5,z:1.5,yaw:Math.PI*.5},build(i){const t=i.kit,e=i.mats;i.S={fueled:!1,barnDoor:null,truckReady:!1,defenseLeft:0},i.partLabels={fuel1:"연료통"},t.ground(170,170,e.grass),t.patch(6,80,e.dirt,0,45,.02),t.patch(20,16,e.dirt,0,8,.015);for(let s=0;s<64;s++){const r=s/64*Math.PI*2,a=78+Math.random()*8,o=Math.sin(r)*a,l=Math.cos(r)*a;Math.abs(o)<8&&l>25||(Math.random()<.8?t.tree(o,l,.95+Math.random()*.45):t.deadTree(o,l,.95))}for(let s=0;s<28;s++)t.tree(-45+Math.random()*50,-65+Math.random()*15,.85+Math.random()*.4);for(let s=0;s<22;s++)t.tree(40+Math.random()*25,-50+Math.random()*35,.8+Math.random()*.35);for(let s=0;s<20;s++)t.tree(-50+Math.random()*20,-45+Math.random()*30,.8+Math.random()*.4);for(let s=0;s<15;s++){const r=Math.random()*Math.PI*2,a=25+Math.random()*35;t.tree(Math.sin(r)*a,Math.cos(r)*a,.75+Math.random()*.45)}i.world.addBox(0,0,-82,170,6,2),i.world.addBox(0,0,82,170,6,2),i.world.addBox(-82,0,0,2,6,170),i.world.addBox(82,0,0,2,6,170),t.room(0,0,12,9,2.8,{mat:e.wood,floorMat:e.woodFloor,ceilMat:e.woodDark,openings:{s:[{at:5,w:1.1}],n:[{at:2,w:1.4,bottom:1.1,top:2.2},{at:8.5,w:1.4,bottom:1.1,top:2.2}],e:[{at:3.5,w:1.4,bottom:1.1,top:2.2}]}}),t.box(e.roof,13,.3,10,0,2.95,0,{collide:!1}),t.door(-1,4.5,0,{label:"현관문"}).setOpen(!1),t.pane(-3.3,1.1,-4.5,0,1.4,1.1),t.pane(3.2,1.1,-4.5,0,1.4,1.1),t.pane(6,1.1,.5,Math.PI/2,1.4,1.1),t.wall(0,-4.5,0,4.5,2.8,e.plasterOld,{openings:[{at:2.8,w:1}]}),t.counter(-4.5,-3.2,2.4,1),t.table(-3,1.5),t.shelf(-5.6,2.5,Math.PI/2),t.bed(4.2,-3),t.crate(4.8,3.5,{s:.8}),t.lamp(-3,2.4,0,{intensity:.7,dist:8}),t.lamp(3.5,2.4,-1,{intensity:.5,dist:7}),i.S.shovelItem=i.pickup("weapon",-5.2,.7,-3.2,{id:"shovel",label:"삽",onPickup:()=>{i.objIndex===0&&i.objectiveDone()}}),i.pickup("weapon",4.2,.6,-3,{id:"pistol",label:"권총"}),i.pickup("ammo",5.3,.5,-2.2,{ammoType:"pistol",amount:12}),i.pickup("medkit",-5.5,.5,3.6,{}),i.pickup("note",-3,.85,1.5,{title:"갈겨쓴 일기",body:`그들이 밭을 지나 오는 걸 봤다. 걷는 게 아니라, 끌려오는 것처럼.

헛간 열쇠는 우물가 아저씨한테 있다. 아저씨는... 옥수수밭에 있다.

트럭은 연료만 있으면 움직인다. 신이시여.`}),i.zombies.spawn("walker",3.2,-1.8,{mode:"lying"}),t.room(-25,-12,10,12,4,{mat:e.woodDark,floorMat:e.dirt,ceilMat:e.corrugatedRust,openings:{e:[{at:4.5,w:2.2}]}}),t.box(e.corrugatedRust,11,.3,13,-25,4.1,-12,{collide:!1}),i.S.barnDoor=t.door(-20,-13.5,-Math.PI/2,{locked:!0,keyId:"barn",keyLabel:"헛간 열쇠",label:"헛간 문",w:2.2,h:2.6,hp:500}),t.crate(-28,-16,{s:1.1}),t.crate(-27,-16.2,{s:.9}),t.crate(-27.5,-15,{s:.7,y:1.1}),t.shelf(-29.2,-9,-Math.PI/2),i.pickup("fuel",-28,.6,-13,{id:"fuel1",label:"연료통",onPickup:()=>{i.objIndex===2&&i.objectiveDone()}}),i.pickup("weapon",-22,.4,-16,{id:"bat",label:"야구방망이"}),i.pickup("ammo",-29,1.1,-9,{ammoType:"pistol",amount:10}),t.corn(28,-20,32,26),t.fence(12,-8,44,-8),t.fence(12,-33,44,-33),t.fence(12,-8,12,-33),t.corpse(30,-22,.6),i.S.keyItem=i.pickup("key",30.5,.35,-21.2,{keyId:"barn",label:"헛간 열쇠",onPickup:()=>{i.objIndex===1&&i.objectiveDone()}}),t.tractor(13,-3,.6),t.well(-8,12),t.fence(-14,18,8,18),t.fence(-14,18,-14,6),t.barrel(-11,-3,{}),t.barrel(16,6,{explosive:!0}),t.crate(9,14,{s:1}),i.pickup("ammo",-8,1,12,{ammoType:"pistol",amount:8}),i.S.truck=t.car(4,22,.15,{mat:e.carRed}),i.S.truckPos=new T(4,1,22),i.interact.add({pos:i.S.truckPos,radius:6,hold:1,prompt:()=>i.S.truckReady?"트럭을 타고 탈출한다":i.S.defenseLeft>0?null:i.S.fueled?"트럭이 준비되기를 기다린다":i.player.parts.has("fuel1")?"연료 주입 (길게)":"연료가 필요하다",canUse:()=>{if(i.S.defenseLeft>0)return!1;const s=i.player.parts.has("fuel1");return i.S.truckReady||i.S.fueled&&i.S.defenseLeft<=0||!i.S.fueled&&s},onUse:()=>{if(console.log("[truck] onUse called",{truckReady:i.S.truckReady,fueled:i.S.fueled,defenseLeft:i.S.defenseLeft,hasFuel:i.player.parts.has("fuel1")}),i.S.truckReady){console.log("[truck] stageComplete"),i.stageComplete();return}!i.S.fueled&&i.player.parts.has("fuel1")&&(console.log("[truck] refueling..."),i.S.fueled=!0,i.player.parts.delete("fuel1"),i.objectiveDone(),console.log("[truck] refuel done, objIndex now:",i.objIndex))}})},objectives:[{id:"weapon",text:"집 안에서 무기가 될 만한 것을 찾는다",enter(i){i.zombies.spawn("walker",-45,30,{mode:"wander"}),i.zombies.spawn("walker",50,20,{mode:"wander"}),i.zombies.spawn("walker",-30,50,{mode:"wander"})},skip(i){i.weapons.give("shovel",{notify:!1})}},{id:"key",text:"헛간 열쇠를 찾는다 — 우물가의 주인은 옥수수밭에 있다",enter(i){i.saveCheckpoint(),i.addTrigger(24,-18,7,()=>{i.audio.play("groan",{pos:new T(28,1,-20),vol:.9}),i.zombies.spawn("walker",34,-22,{mode:"suspect"}),i.zombies.spawn("walker",26,-27,{mode:"suspect"}),i.zombies.spawn("rotten",32,-15,{mode:"suspect"}),i.after(.5,()=>i.emitNoise(i.player.pos,6))}),i.zombies.spawn("walker",18,14,{mode:"wander"})},skip(i){i.player.keys.add("barn"),i.S.keyItem&&i.S.keyItem.remove()}},{id:"fuel",text:"헛간에서 트럭 연료를 찾는다",enter(i){i.saveCheckpoint();let t=!1;const e=i.onUpdate(()=>{i.S.barnDoor&&(i.S.barnDoor.isOpen||i.S.barnDoor.broken)&&!t&&(t=!0,i.removeUpdate(e),i.zombies.spawn("walker",-27,-14,{mode:"chase"}),i.zombies.spawn("walker",-24,-17,{mode:"chase"}),i.zombies.spawn("rotten",-28,-10,{mode:"chase"}),i.zombies.spawn("walker",-32,-20,{mode:"suspect"}),i.audio.play("groanAlert",{pos:new T(-26,1,-13),vol:1}))})},skip(i){i.S.barnDoor&&(i.S.barnDoor.unlock(),i.S.barnDoor.setOpen(!0))}},{id:"refuel",text:"트럭에 연료를 넣는다",enter(i){i.saveCheckpoint(),i.zombies.setTrickle({interval:26,types:["walker"],maxAlive:8,minDist:30,maxDist:45})},skip(i){i.S.fueled=!0}},{id:"escape",text:"트럭 시동 — 몰려오는 무리를 버텨낸다",enter(i){i.saveCheckpoint(i.S.truckPos),i.registerLoop(i.audio.loop("engine",i.S.truckPos,{vol:.7,range:50})),i.emitNoise(i.S.truckPos,70),i.zombies.wave(5,i.S.truckPos.x,i.S.truckPos.z,32,["walker","walker","rotten"]),i.after(16,()=>i.zombies.wave(3,i.S.truckPos.x,i.S.truckPos.z,36,["walker","rotten"])),i.S.defenseLeft=10,i.notify("시동이 걸렸다! 예열되는 동안 버텨라!");const t=i.onUpdate(e=>{i.S.defenseLeft-=e;const n=Math.max(0,Math.ceil(i.S.defenseLeft));i.hud.setObjective(`트럭 예열 중 — ${n}초 버틴다`,!1),i.currentObjectiveText=`트럭 예열 중 — ${n}초`,i.S.defenseLeft<=0&&(i.removeUpdate(t),i.S.defenseLeft=0,i.S.truckReady=!0,i.hud.setObjective("트럭에 타고 농장을 탈출한다"),i.currentObjectiveText="트럭에 타고 농장을 탈출한다",i.notify("트럭이 준비됐다!"))})},skip(i){}}]},dg={id:2,name:"버려진 도로와 주유소",intro:`트럭은 국도 초입에서 멈췄다. 연료계는 바닥, 도로는 버려진 차들로 가득하다.

지도에 따르면 이 길 끝에 오래된 주유소가 있다.
전기가 살아 있다면, 연료를 다시 채울 수 있을 것이다.

차들 사이가 너무 조용하다. 지나치게.`,fog:{color:9409420,near:10,far:85},hemi:[9409930,3683628,.8],sun:{color:13157032,intensity:.5,dir:[-30,55,20]},ambience:{wind:1.1,crickets:.4,creaks:.3,moans:.5},music:0,playerSpawn:{x:-86,z:2,yaw:-Math.PI/2},build(i){const t=i.kit,e=i.mats;i.S={power:!1,fueled:!1,gateOpen:!1,defenseLeft:0,fueling:!1},t.ground(210,140,e.grass),t.road(-3,0,195,10,{horizontal:!0}),t.patch(195,4,e.dirt,-3,9,.015),t.patch(195,3,e.dirt,-3,-7.5,.015),i.world.addBox(0,0,-66,210,6,2),i.world.addBox(0,0,66,210,6,2),i.world.addBox(-101,0,0,2,6,140),i.world.addBox(101,0,0,2,6,140);for(let a=0;a<30;a++){const o=-95+Math.random()*190,l=(Math.random()<.5?-1:1)*(24+Math.random()*35);Math.random()<.6?t.tree(o,l,.8+Math.random()*.5):t.deadTree(o,l)}const n=[[-70,1.5,.2,e.carWhite],[-62,-2.5,-.3,e.carBlue],[-48,2,.1,e.carRed],[-40,-1,0,e.carWhite,!0],[-28,2.5,.5,e.carBlue],[-18,-2,-.2,e.carWhite],[-5,1,.15,e.carRed],[5,-2.5,0,e.carBlue],[40,1.5,-.4,e.carWhite],[50,-1.5,.2,e.carBlue]];for(const[a,o,l,c,h]of n)t.car(a,o,l,{mat:c,alarm:!!h,wreck:Math.random()<.5});t.corpse(-58,1,1.2),t.corpse(-20,-3,.4),t.blood(-58,1.5,1),i.pickup("ammo",-62,1,-2.5,{ammoType:"pistol",amount:8}),i.pickup("medkit",-28,1,2.5,{}),i.pickup("note",-48,1,2,{title:"차 안의 쪽지",body:`검문소는 이미 뚫렸다. 군인들은 다 어디로 갔지?

주유소 영감이 발전기를 뒤쪽에 숨겨놨댔어. 전기만 있으면 펌프는 돌아가.

소리만 내지 마. 제발 소리만은.`});for(const[a,o]of[[12,-20],[24,-20],[12,-12],[24,-12]])t.box(e.metalDark,.3,4.2,.3,a,0,o);t.box(e.corrugated,16,.3,11,18,4.2,-16,{collide:!1}),t.gasPump(15,-16),t.gasPump(21,-16),i.S.canopyLamps=[t.lamp(15,3.9,-16,{on:!1,intensity:1.4,dist:12}),t.lamp(21,3.9,-16,{on:!1,intensity:1.4,dist:12})],t.room(36,-18,13,9,3,{mat:e.brickGray,floorMat:e.tile,ceilMat:e.concreteDark,openings:{s:[{at:3,w:1.1}],w:[{at:4.5,w:1.6,bottom:.9,top:2.2}]}}),t.box(e.concreteDark,14,.3,10,36,3.1,-18,{collide:!1}),t.door(32.5,-13.5,0,{label:"편의점 문"}),i.S.storePane=t.pane(29.5,.9,-17.2,Math.PI/2,1.6,1.3),t.counter(33,-20,3,1),t.shelf(38,-15.2,0),t.shelf(41,-18,Math.PI/2),t.shelf(38,-20.8,0),i.S.storeLamp=t.lamp(36,2.6,-18,{on:!1,intensity:1.2,dist:10}),i.S.shotgunItem=i.pickup("weapon",33,1.2,-20,{id:"shotgun",label:"산탄총",onPickup:()=>{i.objIndex===1&&i.objectiveDone()}}),i.pickup("ammo",34.5,1.2,-20,{ammoType:"shell",amount:8}),i.pickup("ammo",38,.5,-15.5,{ammoType:"shell",amount:6}),i.pickup("medkit",41,.5,-17,{}),i.pickup("medkit",38,.5,-20.5,{}),i.pickup("ammo",40.5,.5,-20.5,{ammoType:"pistol",amount:12}),t.machine(44,-24,.3,2,1.4,1.2),t.barrel(46,-23,{}),t.barrel(45.2,-25.5,{explosive:!0});const s=new T(44,1,-24);i.interact.add({pos:s,radius:2.4,hold:4,prompt:()=>i.S.power?null:"발전기 시동 (길게)",canUse:()=>!i.S.power,onUse:()=>{i.S.power=!0,i.S.genLoop=i.registerLoop(i.audio.loop("generator",s,{vol:.8,range:45})),i.emitNoise(s,45),i.after(.5,()=>{i.S.canopyLamps[0].setOn(!0),i.audio.play("click",{pos:s,vol:.8})}),i.after(1.2,()=>{i.S.canopyLamps[1].setOn(!0),i.audio.play("click",{pos:s,vol:.8})}),i.after(1.9,()=>i.S.storeLamp.setOn(!0)),i.objIndex===2&&i.objectiveDone()},onHoldTick:()=>{Math.random()<.1&&i.audio.play("lever",{pos:s,vol:.3})}}),i.S.truck=t.car(14,-6,-.08,{mat:e.carRed}),i.S.truckPos=new T(14,1,-6),i.interact.add({pos:i.S.truckPos,radius:3,hold:0,prompt:()=>!i.S.power||i.S.fueled||i.S.fueling?null:"주유 시작",canUse:()=>i.S.power&&!i.S.fueled&&!i.S.fueling,onUse:()=>{i.objIndex===3&&ug(i)}}),t.barricade(62,-30,62,-4),t.barricade(62,4,62,30),t.box(e.concreteDark,1.4,1.2,3,60,0,-6),t.box(e.concreteDark,1.4,1.2,3,60,0,6),i.S.gateMesh=t.box(e.metalDark,.3,2.4,8.4,62,0,0,{tag:"gate"}),i.S.gateCol=i.S.gateMesh.userData.col,t.room(58,12,4,4,2.6,{mat:e.corrugatedRust,floorMat:e.concreteDark,openings:{w:[{at:1.4,w:1.1}]}}),i.pickup("ammo",58,.4,12,{ammoType:"shell",amount:4}),i.pickup("ammo",59,.4,13,{ammoType:"pistol",amount:10});const r=new T(60.5,1,10);t.box(e.metal,.3,1.2,.3,60.5,0,10),i.interact.add({pos:r,radius:2.2,hold:1.2,prompt:()=>i.S.gateOpen?null:"게이트 개방 레버 (길게)",canUse:()=>!i.S.gateOpen&&i.objIndex>=4,onUse:()=>{i.S.gateOpen=!0,i.S.gateCol.enabled=!1,i.audio.play("lever",{pos:r,vol:1}),i.audio.play("doorBreak",{pos:new T(62,1,0),vol:.7}),i.emitNoise(r,25);let a=0;const o=i.onUpdate(l=>{a+=l,i.S.gateMesh.position.y=1.2+Math.min(2.3,a*1.2),a>2&&i.removeUpdate(o)});i.notify("게이트가 열렸다")}}),i.addTrigger(78,0,6,()=>{i.objIndex===4&&i.objectiveDone()}),i.addTrigger(-64,0,8,()=>{i.zombies.spawn("rotten",-60,-4,{mode:"chase"}),i.zombies.spawn("walker",-66,4,{mode:"chase"}),i.audio.play("groanAlert",{pos:new T(-62,1,0),vol:1})}),i.addTrigger(-34,0,8,()=>{i.zombies.spawn("walker",-30,5,{mode:"suspect"}),i.zombies.spawn("walker",-38,-5,{mode:"suspect"}),i.zombies.spawn("rotten",-25,0,{mode:"suspect"})}),i.zombies.spawn("walker",-10,15,{mode:"wander"}),i.zombies.spawn("walker",0,-20,{mode:"wander"}),i.zombies.spawn("walker",30,12,{mode:"wander"}),i.zombies.spawn("walker",-45,-18,{mode:"wander"})},objectives:[{id:"reach",text:"도로를 따라 주유소를 찾는다",enter(i){i.addTrigger(18,-14,10,()=>{i.objIndex===0&&i.objectiveDone()})},skip(){}},{id:"supplies",text:"편의점에서 쓸 만한 보급품을 찾는다",enter(i){i.saveCheckpoint();const t=i.onUpdate(()=>{i.weapons.owned.has("shotgun")&&(i.removeUpdate(t),i.after(1.2,()=>{i.S.storePane.break(),i.zombies.spawn("walker",28,-16,{mode:"chase"}),i.zombies.spawn("rotten",27,-20,{mode:"chase"}),i.zombies.spawn("walker",30,-26,{mode:"chase"})}))})},skip(i){i.weapons.give("shotgun",{notify:!1}),i.S.shotgunItem&&i.S.shotgunItem.remove(),i.S.storePane&&i.S.storePane.break()}},{id:"power",text:"주유소 뒤편의 발전기를 가동한다",enter(i){i.saveCheckpoint();const t=i.onUpdate(()=>{i.S.power&&(i.removeUpdate(t),i.after(3,()=>i.zombies.wave(7,18,-16,34,["walker","walker","rotten"])))})},skip(i){i.S.power=!0,i.S.canopyLamps.forEach(t=>t.setOn(!0)),i.S.storeLamp.setOn(!0)}},{id:"fuelDefense",text:"차량에 연료를 주입한다 — 주유가 끝날 때까지 버텨라",enter(i){i.saveCheckpoint()},skip(i){i.S.fueled=!0}},{id:"gate",text:"검문소 게이트를 열고 동쪽으로 이동한다",enter(i){i.saveCheckpoint(),i.zombies.setTrickle({interval:24,types:["walker","rotten"],maxAlive:8,minDist:30,maxDist:48})},skip(i){}}]};function ug(i){i.S.fueling=!0,i.S.defenseLeft=60;const t=i.registerLoop(i.audio.loop("pump",i.S.truckPos,{vol:.7,range:40}));i.emitNoise(i.S.truckPos,40),i.notify("주유 시작 — 펌프 소리가 그들을 부른다"),i.zombies.wave(5,i.S.truckPos.x,i.S.truckPos.z,30,["walker","rotten"]),i.after(20,()=>{i.S.fueling&&i.zombies.wave(6,i.S.truckPos.x,i.S.truckPos.z,34,["walker","rotten"])}),i.after(42,()=>{i.S.fueling&&i.zombies.wave(4,i.S.truckPos.x,i.S.truckPos.z,34,["walker","walker","brute"])});const e=i.onUpdate(n=>{i.S.defenseLeft-=n;const s=Math.max(0,Math.ceil(i.S.defenseLeft));i.hud.setObjective(`주유 중 — ${s}초`,!1),i.currentObjectiveText=`주유 중 — ${s}초`,i.S.defenseLeft<=0&&(i.removeUpdate(e),i.S.fueling=!1,i.S.fueled=!0,t.stop(),i.notify("주유 완료"),i.objIndex===3&&i.objectiveDone())})}const fg={id:3,name:"폐허가 된 소도시",intro:`도시는 며칠 만에 무너졌다.
거리에는 뒤집힌 차와 버려진 바리케이드뿐이다.

경찰서에는 아직 무기가 남아 있을 것이다.
병원에는 약품이. 운이 좋다면.

남쪽 도로는 무너진 잔해로 막혀 있다.
지붕을 타고 넘어가는 수밖에 없다.`,fog:{color:8685695,near:8,far:75},hemi:[8685693,3091750,.7],sun:{color:12104346,intensity:.4,dir:[25,50,-30]},ambience:{wind:.9,crickets:.2,creaks:.8,moans:.7},music:.08,playerSpawn:{x:-78,z:0,yaw:-Math.PI/2},build(i){const t=i.kit,e=i.mats;i.S={armoryOpened:!1,gateOpen:!1},t.ground(185,185,e.concreteDark),t.road(-40,0,100,10,{horizontal:!0}),t.road(0,20,10,130,{}),t.patch(60,60,e.concrete,-35,-35,.01),t.patch(60,60,e.concrete,35,-35,.01),t.patch(60,60,e.concrete,-35,35,.01),t.patch(60,60,e.concrete,35,35,.01),i.world.addBox(0,0,-90,185,8,2),i.world.addBox(0,0,90,185,8,2),i.world.addBox(-90,0,0,2,8,185),i.world.addBox(90,0,0,2,8,185);for(const[s,r,a,o,l]of[[-60,-25,18,14,6],[-58,28,16,12,5],[60,-28,20,15,7],[58,25,16,14,5],[-25,-55,20,14,6],[25,-55,18,12,5],[45,55,18,14,6],[-45,55,16,12,5]])t.box(Math.random()<.5?e.brick:e.brickGray,a,l,o,s,0,r);t.lampPost(-8,-8,{}),t.lampPost(8,12,{}),t.lampPost(-8,25,{}),t.car(-30,2,.2,{mat:e.carWhite,wreck:!0}),t.car(-15,-2,-.3,{mat:e.carBlue,wreck:!0}),t.car(6,-12,1.6,{mat:e.carPolice,wreck:!0}),t.car(3,14,.1,{mat:e.carRed,alarm:!0}),t.corpse(-12,3,.7),t.corpse(4,-10,2),t.blood(-12,3,1.1),t.barrel(-6,-14,{explosive:!0}),t.barrel(10,30,{explosive:!0}),t.room(-25,-22,16,12,3.2,{mat:e.brickGray,floorMat:e.tile,ceilMat:e.concreteDark,openings:{s:[{at:7,w:1.1},{at:2.5,w:1.5,bottom:1,top:2.3},{at:11.5,w:1.5,bottom:1,top:2.3}]}}),t.box(e.concreteDark,17,.3,13,-25,3.3,-22,{collide:!1}),t.door(-26,-16,0,{label:"경찰서 문"}),i.S.policePanes=[t.pane(-29.75,1,-16,0,1.5,1.3),t.pane(-20.75,1,-16,0,1.5,1.3)],t.counter(-24,-19,4,1),i.pickup("key",-24,1.1,-19,{keyId:"armory",label:"무기고 열쇠"}),i.pickup("note",-22.5,1.1,-19,{title:"근무 일지 (마지막 장)",body:`대피 명령. 무기고를 잠그고 남쪽으로.

하지만 남쪽 도로가 막혔다는 무전이 왔다. 옥상으로 다니는 사람들을 봤다. 식당 뒷계단이 아직 쓸 만하다고.

무기고 열쇠는 접수대에 둔다. 누구든, 살아남아라.`}),t.radio(-28,1.05,-18),t.wall(-33,-23,-25,-23,3.2,e.brickGray,{openings:[{at:2.5,w:1.1}]}),t.wall(-25,-28,-25,-23,3.2,e.brickGray,{}),i.S.armoryDoor=t.door(-30.5,-23,0,{locked:!0,keyId:"armory",keyLabel:"무기고 열쇠",label:"무기고",metal:!0,hp:900}),t.shelf(-31.5,-27.2,0),i.S.rifleItem=i.pickup("weapon",-31,.9,-25.5,{id:"rifle",label:"사냥용 소총",onPickup:()=>{i.objIndex===0&&i.objectiveDone()}}),i.S.smgItem=i.pickup("weapon",-28,.9,-26.5,{id:"smg",label:"기관단총",onPickup:()=>{i.objIndex===0&&i.objectiveDone()}}),i.pickup("ammo",-32,.4,-26.5,{ammoType:"rifle",amount:8}),i.pickup("ammo",-30,.4,-27,{ammoType:"smg",amount:45}),i.pickup("ammo",-27,.4,-25,{ammoType:"pistol",amount:12}),i.pickup("ammo",-29,.4,-24.5,{ammoType:"shell",amount:6}),t.room(25,-20,14,10,3.2,{mat:e.plaster,floorMat:e.tile,ceilMat:e.concreteDark,openings:{s:[{at:3,w:1.1}],w:[{at:3,w:1.4,bottom:1,top:2.2}]}}),t.box(e.concreteDark,15,.3,11,25,3.3,-20,{collide:!1}),t.door(21,-15,0,{label:"진료소 문"}),t.pane(18,1,-21.3,Math.PI/2,1.4,1.2),t.bed(21,-22,0),t.bed(25,-22,0),t.bed(29,-22,0),t.wall(25,-25,25,-18,3.2,e.plasterOld,{openings:[{at:4.5,w:1.2}]}),t.counter(30,-17,2,1),t.blood(23,-21,1.4),t.corpse(27,-19,1.1),i.S.medsItem=i.pickup("medkit",30,1.1,-17,{onPickup:()=>{i.objIndex===1&&i.objectiveDone()}}),i.pickup("medkit",29,.5,-23,{}),i.pickup("medkit",21,.5,-23,{}),i.pickup("ammo",25,.5,-24,{ammoType:"smg",amount:25}),i.pickup("note",30.5,1.1,-16.5,{title:"진료 기록",body:`물린 환자는 3시간을 못 넘긴다. 진정제도 소용없다.

바닥을 기는 저것들은... 다리가 부러져도 멈추지 않았다.

우리는 옥상으로 간다. 하느님, 부디.`}),i.zombies.spawn("crawler",24,-18,{mode:"idle"}),i.zombies.spawn("crawler",27,-23,{mode:"idle"}),i.zombies.spawn("walker",22,-20,{mode:"lying"}),t.room(-24,20,12,9,3.2,{mat:e.brick,floorMat:e.woodFloor,ceilMat:e.concreteDark,openings:{n:[{at:5.5,w:1.1},{at:1.5,w:1.6,bottom:.9,top:2.2}]}}),t.door(-24.5,15.5,0,{label:"식당 문"}),t.pane(-27.7,.9,15.5,0,1.6,1.3),t.counter(-24,22,5,1),t.table(-27,18),t.table(-21,18),i.pickup("ammo",-24,1.1,22,{ammoType:"shell",amount:4}),i.pickup("medkit",-22,1.1,22,{}),i.zombies.spawn("walker",-26,20,{mode:"idle"}),t.stairs(-31.4,16,0,{steps:12,stepH:.28,stepD:.4,w:1.9}),t.fence(-32.5,15.5,-32.5,21.5),t.barricade(-8,29,8,29,2.8),t.box(e.concreteDark,5,2.2,4,-3,0,31.5),t.box(e.concreteDark,6,1.8,4,3.5,0,31),t.car(0,28,.9,{mat:e.carWhite,wreck:!0}),t.barricade(-8,29,-8,44,2.8),t.barricade(8,29,8,44,2.8),t.box(e.brickGray,10,3.5,20,-14,0,38),t.box(e.brickGray,10,3.5,20,14,0,38),t.room(-24,34,10,8,3,{mat:e.plasterOld,floorMat:e.woodFloor,ceilMat:e.concreteDark,openings:{s:[{at:3,w:1.1}]}}),t.door(-26,38,0,{label:"집 문"}),i.pickup("ammo",-26,.4,35,{ammoType:"rifle",amount:4}),i.pickup("medkit",-24,.4,36.5,{}),t.plank(-24,3.5,24.2,-24,3.5,30.4,1),t.crate(-27,23,{y:3.45,s:.8}),t.barricade(-32,52,-1.5,52,2.6),t.barricade(1.5,52,32,52,2.6),i.S.gateMesh=t.box(e.metalDark,3,2.6,.3,0,0,52,{tag:"gate"}),i.S.gateCol=i.S.gateMesh.userData.col;const n=new T(2.4,1,51);t.box(e.metal,.3,1.2,.3,2.4,0,51),i.interact.add({pos:n,radius:2.2,hold:1.4,prompt:()=>i.S.gateOpen?null:"외곽 게이트 개방 (길게)",canUse:()=>!i.S.gateOpen,onUse:()=>{i.S.gateOpen=!0,i.S.gateCol.enabled=!1,i.audio.play("lever",{pos:n,vol:1}),i.emitNoise(n,30);let s=0;const r=i.onUpdate(a=>{s+=a,i.S.gateMesh.position.y=1.3+Math.min(2.5,s*1.4),s>2&&i.removeUpdate(r)});i.notify("게이트가 열렸다 — 달려라"),i.zombies.wave(6,0,40,26,["walker","rotten"])}}),i.addTrigger(0,62,6,()=>{i.objIndex===3&&i.objectiveDone()}),i.zombies.spawn("walker",-40,5,{mode:"wander"}),i.zombies.spawn("walker",-10,-30,{mode:"wander"}),i.zombies.spawn("walker",15,8,{mode:"wander"}),i.zombies.spawn("rotten",35,-5,{mode:"wander"}),i.zombies.spawn("screamer",5,-35,{mode:"wander"}),i.zombies.spawn("walker",-35,30,{mode:"wander"}),i.zombies.spawn("walker",-20,-5,{mode:"lying"}),i.zombies.spawn("walker",12,18,{mode:"lying"}),i.addTrigger(20,22,10,()=>{const s=new T(24,1,26);i.audio.play("knock",{pos:s,vol:1}),i.after(2.5,()=>i.audio.play("knock",{pos:s,vol:1})),i.after(5,()=>i.audio.play("groan",{pos:s,vol:.8}))}),t.room(24,26,10,8,3,{mat:e.plasterOld,floorMat:e.woodFloor,ceilMat:e.concreteDark,openings:{w:[{at:3,w:1.1}]}}),t.door(19,25,-Math.PI/2,{label:"집 문",hp:100}),i.zombies.spawn("walker",24,26,{mode:"idle"}),i.zombies.spawn("walker",26,28,{mode:"idle"}),i.pickup("ammo",27,.4,24,{ammoType:"smg",amount:30}),i.pickup("medkit",22,.4,29,{})},objectives:[{id:"armory",text:"경찰서에서 무기를 확보한다",enter(i){const t=i.onUpdate(()=>{const e=i.S.armoryDoor;!e||!e.isOpen&&!e.broken||i.S.armoryOpened||(i.S.armoryOpened=!0,i.removeUpdate(t),i.audio.play("scream",{pos:new T(-25,1,-10),vol:1,range:70}),i.after(1.5,()=>{i.zombies.wave(8,-25,-14,20,["walker","walker","rotten"]),i.S.policePanes.forEach((n,s)=>i.after(s*1.2,()=>n.break()))}),i.after(12,()=>i.zombies.wave(4,-25,-16,26,["walker","rotten"])))})},skip(i){i.weapons.give("rifle",{notify:!1}),i.player.addAmmo("rifle",8),i.S.armoryDoor&&(i.S.armoryDoor.unlock(),i.S.armoryDoor.setOpen(!0)),i.S.rifleItem&&i.S.rifleItem.remove(),i.S.armoryOpened=!0}},{id:"meds",text:"진료소에서 응급 약품을 확보한다",enter(i){i.saveCheckpoint()},skip(i){i.player.meds+=1,i.S.medsItem&&i.S.medsItem.remove()}},{id:"roof",text:"식당 뒷계단으로 지붕에 올라 막힌 거리를 우회한다",enter(i){i.saveCheckpoint(),i.zombies.decor(18,0,74,12),i.zombies.spawn("walker",-4,44,{mode:"wander"}),i.zombies.spawn("walker",4,47,{mode:"wander"}),i.addTrigger(-24,40,5,()=>{i.objIndex===2&&i.objectiveDone()})},skip(i){i.zombies.decor(18,0,74,12)}},{id:"exit",text:"골목을 지나 남쪽 게이트로 탈출한다",enter(i){i.saveCheckpoint(),i.zombies.setTrickle({interval:20,types:["walker","rotten"],maxAlive:9,minDist:26,maxDist:44})},skip(i){}}]},pg={id:4,name:"공장과 하수도",intro:`도시 외곽으로 가는 다리는 모두 끊겼다.
남은 길은 하나 — 낡은 정수 공장의 하수도가 강 밑을 지난다.

공장은 전기가 끊긴 지 오래다.
수문은 물에 잠겨 있고, 펌프는 죽어 있다.

어둠 속에서는, 발소리가 유일한 경고다.`,fog:{color:3027758,near:5,far:48},hemi:[4870728,1711128,.4],sun:{color:6976104,intensity:.18,dir:[10,40,-20]},ambience:{wind:.3,crickets:0,creaks:.7,moans:.9,drips:.8},music:.12,playerSpawn:{x:0,z:-46,yaw:Math.PI},build(i){const t=i.kit,e=i.mats;i.S={power:!1,pumpOn:!1,hasWheel:!1,valveStage:0,gateOpen:!1},i.partLabels={wheel:"밸브 휠"},i.metalFloor=!0,t.ground(150,150,e.concreteDark),i.world.addBox(0,0,-72,150,8,2),i.world.addBox(0,0,72,150,8,2),i.world.addBox(-72,0,0,2,8,150),i.world.addBox(72,0,0,2,8,150),t.box(e.rust,8,12,8,-35,0,-40),t.box(e.corrugatedRust,10,7,14,38,0,-35);const n=new pt(new ce(1.5,2,18,8),e.brickGray);n.position.set(-25,9,-50),i.levelGroup.add(n),t.deadTree(-20,20),t.deadTree(25,8),t.deadTree(-30,-5),t.room(0,-25,34,22,5,{mat:e.corrugated,floorMat:e.concreteDark,ceilMat:e.metalDark,openings:{s:[{at:16,w:1.2}],n:[{at:6,w:2,bottom:3.2,top:4.4},{at:26,w:2,bottom:3.2,top:4.4}]}}),t.door(-1,-14,0,{label:"공장 출입문",metal:!0,hp:300}),t.machine(-10,-22,0,4,2.6,2.2),t.machine(-3,-22,0,4,2.6,2.2),t.machine(5,-22,0,4,2.6,2.2),t.machine(-8,-27,.1,3,2.2,2),t.machine(7,-28,-.1,3,2.2,2),t.pipe(-14,2.2,-25,14,2.2,-25),t.pipe(0,0,-20,0,4.6,-20,.25),t.crate(13,-18,{s:1.2}),t.crate(14.5,-18.5,{s:.9}),t.crate(13.5,-19.5,{s:.8,y:1.2}),t.barrel(-14,-17,{}),t.barrel(-13,-18.5,{explosive:!0}),t.corpse(-5,-18,1.5),t.blood(-5,-18,1.2),i.S.redLamp=t.lamp(0,4.5,-25,{color:16724e3,intensity:.9,dist:14,on:!0}),i.S.hallLamps=[t.lamp(-9,4.6,-20,{on:!1,intensity:1.3,dist:14}),t.lamp(9,4.6,-20,{on:!1,intensity:1.3,dist:14}),t.lamp(-9,4.6,-31,{on:!1,intensity:1.3,dist:14}),t.lamp(9,4.6,-31,{on:!1,intensity:1.3,dist:14})],t.wall(-17,-30,-11,-30,5,e.corrugated,{openings:[{at:4,w:1.1}]}),t.wall(-11,-36,-11,-30,5,e.corrugated,{}),t.door(-13,-30,0,{label:"배전실 문",metal:!0}),t.machine(-15.5,-34,0,1.6,2.2,1);const s=new T(-15.5,1.2,-34);i.S.breakerLamp=t.lamp(-14,3,-33,{color:16756832,intensity:.4,dist:6,on:!0}),i.interact.add({pos:s,radius:2.2,hold:4,prompt:()=>i.S.power?null:"차단기 복구 (길게)",canUse:()=>!i.S.power,onUse:()=>mg(i),onHoldTick:()=>{Math.random()<.12&&i.audio.play("lever",{pos:s,vol:.3})}}),i.pickup("ammo",-12.5,.4,-34.5,{ammoType:"smg",amount:30}),t.wall(11,-36,11,-29,5,e.corrugated,{openings:[{at:3,w:1.1}]}),t.wall(11,-29,17,-29,5,e.corrugated,{}),t.door(11,-33,-Math.PI/2,{label:"자재창고 문",metal:!0}),t.shelf(15.8,-32,-Math.PI/2),t.crate(13,-35,{s:1}),i.S.wheelItem=i.pickup("part",15,.6,-34.5,{id:"wheel",label:"밸브 휠",onPickup:()=>{i.S.hasWheel=!0,i.objIndex===2&&i.objectiveDone()}}),i.pickup("medkit",13,1.1,-35,{}),i.pickup("ammo",15.8,.6,-30.5,{ammoType:"shell",amount:5}),i.zombies.spawn("crawler",-6,-25,{mode:"idle"}),i.zombies.spawn("walker",8,-19,{mode:"lying"}),i.zombies.spawn("walker",-12,-28,{mode:"idle"}),i.zombies.spawn("crawler",3,-30,{mode:"idle"}),t.fence(-6,-13,-6,0),t.fence(6,-13,6,0),t.barrel(-4,-8,{}),t.corpse(3,-6,.5),i.pickup("note",3.5,.3,-5.5,{title:"작업반장의 메모",body:`펌프를 돌리기 전엔 수문 근처에 가지 마라. 수위가 높으면 통로가 잠긴다.

밸브 휠은 누가 자꾸 훔쳐가서 자재창고에 넣고 잠갔다.

지하에서 이상한 소리가 난다. 물소리가 아니다. 확실히 아니다.`}),t.room(0,3,8,6,2.8,{mat:e.sewer,floorMat:e.sewerFloor,ceilMat:e.sewer,openings:{n:[{at:3,w:1.4}],s:[{at:3.3,w:1.4}]}}),t.lamp(0,2.5,3,{color:16724e3,intensity:.6,dist:8,on:!0}),t.box(e.sewer,.45,2.6,23,-2.3,0,17.5),t.box(e.sewer,5.5,.3,23,0,2.6,17.5,{collide:!1}),t.patch(4.2,23,e.sewerFloor,0,17.5,.025),t.wall(2.3,6,2.3,13.5,2.6,e.sewer,{}),t.wall(2.3,13.5,2.3,16.5,2.6,e.sewer,{openings:[{at:.6,w:1.6}]}),t.wall(2.3,16.5,2.3,29,2.6,e.sewer,{}),t.room(6.5,15,7,4.4,2.6,{mat:e.sewer,floorMat:e.sewerFloor,ceilMat:e.sewer,openings:{w:[{at:.9,w:1.6}]}}),i.pickup("ammo",8.5,.4,15,{ammoType:"rifle",amount:5}),i.pickup("ammo",7.5,.4,16,{ammoType:"pistol",amount:12}),i.pickup("medkit",8.5,.4,14,{}),i.zombies.spawn("crawler",7,15.5,{mode:"idle"}),t.room(0,33,12,8,3,{mat:e.sewer,floorMat:e.grate,ceilMat:e.sewer,openings:{n:[{at:5.3,w:1.4}],s:[{at:5.3,w:1.4}]}}),t.machine(-4,33,0,2.5,2,2),t.machine(4,33,0,2.5,2,2),t.pipe(-4,2,33,4,2,33,.3),t.lamp(0,2.7,33,{color:16756832,intensity:.5,dist:9,on:!0});const r=new T(-4,1.2,31.6);i.interact.add({pos:r,radius:2.2,hold:3,prompt:()=>i.S.pumpOn?null:i.S.power?"배수 펌프 가동 (길게)":"전력이 없다",canUse:()=>i.S.power&&!i.S.pumpOn,onUse:()=>{i.S.pumpOn=!0,i.registerLoop(i.audio.loop("pump",r,{vol:.8,range:40})),i.emitNoise(r,35),i.notify("펌프가 물을 뿜어내기 시작한다"),i.objIndex===1&&i.objectiveDone()}}),Rl(t,e,-2.3,37,2.3,46),i.S.gateMesh=t.box(e.rust,4.4,2.6,.4,0,0,46,{tag:"gate"}),i.S.gateCol=i.S.gateMesh.userData.col,t.lamp(0,2.4,44,{color:16724e3,intensity:.7,dist:8,on:!0});const a=new T(1.6,1.2,44.8);t.box(e.rust,.35,1.3,.35,1.6,0,44.8),i.interact.add({pos:a,radius:2,hold:4,prompt:()=>i.S.gateOpen?null:i.S.pumpOn?i.player.parts.has("wheel")?`수문 개방 ${i.S.valveStage}/3 (길게)`:"밸브 휠이 없다":"수위가 너무 높다 — 펌프가 먼저다",canUse:()=>i.S.pumpOn&&i.player.parts.has("wheel")&&!i.S.gateOpen,onUse:()=>gg(i),onHoldTick:()=>{Math.random()<.15&&i.audio.play("valve",{pos:a,vol:.5})}}),Rl(t,e,-2.3,46.4,2.3,58),i.addTrigger(0,55,4,()=>{i.objIndex===3&&i.S.gateOpen&&i.objectiveDone()}),t.patch(1.6,52,e.water,0,30,.04),i.zombies.spawn("crawler",0,12,{mode:"idle"}),i.zombies.spawn("walker",0,22,{mode:"lying"}),i.zombies.spawn("screamer",0,39,{mode:"idle"})},objectives:[{id:"power",text:"공장 배전실에서 전력을 복구한다",enter(i){},skip(i){i.S.power=!0,i.S.hallLamps.forEach(t=>t.setOn(!0)),i.audio.ambience({wind:.2,creaks:.6,moans:.8,drips:.8,industrial:.9})}},{id:"pump",text:"하수도의 배수 펌프를 작동시킨다",enter(i){i.saveCheckpoint();const t=i.onUpdate(()=>{i.S.pumpOn&&(i.removeUpdate(t),i.after(2,()=>{i.zombies.spawn("crawler",0,24,{mode:"chase"}),i.zombies.spawn("crawler",0,40,{mode:"chase"}),i.zombies.spawn("walker",0,8,{mode:"chase"})}))})},skip(i){i.S.pumpOn=!0}},{id:"wheel",text:"공장 자재창고에서 밸브 휠을 찾는다 (되돌아가라)",enter(i){i.saveCheckpoint(),i.zombies.spawn("brute",6,-30,{mode:"idle"}),i.zombies.spawn("screamer",-3,-20,{mode:"wander"}),i.zombies.spawn("walker",0,-5,{mode:"wander"})},skip(i){i.player.parts.add("wheel"),i.S.hasWheel=!0,i.S.wheelItem&&i.S.wheelItem.remove(),i.zombies.spawn("brute",6,-30,{mode:"idle"})}},{id:"gate",text:"수문을 열어라 — 밸브를 끝까지 돌린다",enter(i){i.saveCheckpoint(),i.zombies.setTrickle({interval:22,types:["walker","crawler"],maxAlive:7,minDist:20,maxDist:40})},skip(i){}}]};function Rl(i,t,e,n,s,r){const a=r-n,o=(n+r)/2;i.box(t.sewer,.45,2.6,a,e,0,o),i.box(t.sewer,.45,2.6,a,s,0,o),i.box(t.sewer,s-e+.9,.3,a,(e+s)/2,2.6,o,{collide:!1}),i.patch(s-e-.4,a,t.sewerFloor,(e+s)/2,o,.025)}function mg(i){i.S.power=!0;const t=new T(-15.5,1,-34);i.registerLoop(i.audio.loop("generator",t,{vol:.6,range:40})),i.audio.ambience({wind:.2,creaks:.6,moans:.8,drips:.8,industrial:.9}),i.emitNoise(t,40),i.S.hallLamps.forEach((e,n)=>i.after(.6+n*.7,()=>{e.setOn(!0),i.audio.play("click",{vol:.6})})),i.notify("전력이 복구됐다 — 기계 소음이 울린다"),i.after(4,()=>{i.zombies.wave(5,0,-25,18,["walker","crawler"]),i.audio.play("scream",{pos:new T(0,1,-35),vol:.9,range:60})}),i.objIndex===0&&i.objectiveDone()}function gg(i){if(i.S.valveStage++,i.audio.play("valve",{vol:.9}),i.emitNoise(new T(0,1,45),30),i.S.valveStage>=3){i.S.gateOpen=!0,i.S.gateCol.enabled=!1,i.audio.play("doorBreak",{pos:new T(0,1,46),vol:1}),i.notify("수문이 열렸다!");let t=0;const e=i.onUpdate(n=>{t+=n,i.S.gateMesh.position.y=1.3+Math.min(2.4,t*.9),t>3&&i.removeUpdate(e)})}else{i.notify(`수문 ${i.S.valveStage}/3 — 그들이 소리를 들었다`);const t=i.S.valveStage===1?["walker","crawler"]:["walker","rotten","crawler"];i.zombies.wave(3+i.S.valveStage,0,30,22,t)}}const _g={id:5,name:"도시 외곽 탈출",intro:`하수도를 빠져나오자 무전기가 잡음 사이로 살아났다.

"…생존자는… 북부 터미널로… 차량 확보…"

터미널의 낡은 버스. 그것이 마지막 희망이다.
부품을 모으고, 길을 열고, 그리고—

이 도시의 모든 것들이 그 소리를 들을 것이다.`,fog:{color:8290937,near:12,far:95},hemi:[8554618,2894372,.72],sun:{color:11578e3,intensity:.42,dir:[-35,55,25]},ambience:{wind:1.2,crickets:.15,creaks:.4,moans:.9},music:.12,playerSpawn:{x:0,z:72,yaw:Math.PI},build(i){const t=i.kit,e=i.mats;i.S={radioDone:!1,parts:0,installed:!1,blockadeClear:!1,defenseLeft:0,busReady:!1,defenseStarted:!1},i.partLabels={battery:"배터리",plug:"점화 플러그",busfuel:"연료통"},t.ground(220,220,e.concreteDark),t.road(0,10,14,130,{}),t.road(0,-45,200,14,{horizontal:!0}),i.world.addBox(0,0,-106,220,8,2),i.world.addBox(0,0,106,220,8,2),i.world.addBox(-106,0,0,2,8,220),i.world.addBox(106,0,0,2,8,220);for(const[d,u,f,g,_]of[[-70,-70,24,18,10],[70,-75,28,20,12],[-80,40,20,16,8],[80,45,22,18,9],[-60,75,18,14,7],[60,80,20,16,8]])t.box(e.brickGray,f,_,g,d,0,u);t.lampPost(-9,30,{}),t.lampPost(9,-10,{}),t.lampPost(-9,-35,{});for(const[d,u,f]of[[-6,48,.3],[6,50,-.5],[-3,55,1.1],[7,44,.8]])t.box(e.leafDead,3,1.8,2.6,d,0,u,{ry:f});t.crate(0,52,{s:1}),t.crate(1.4,52.4,{s:.8}),t.corpse(-4,46,2),t.corpse(3,53,.3),t.blood(-4,46,1.3),t.blood(3,53,1),t.barrel(-2,50,{}),new T(2,1,48),t.barrel(2,48,{});const n=t.lamp(2,1.6,48,{color:16740384,intensity:1.6,dist:12,on:!0});i.onUpdate(d=>{n.light.intensity=1.3+Math.sin(i.elapsed*9)*.35+Math.random()*.15}),i.pickup("medkit",0,1.05,52,{}),i.pickup("ammo",1.4,1.25,52.4,{ammoType:"shell",amount:6}),i.pickup("ammo",-6,.4,47,{ammoType:"smg",amount:40}),i.pickup("note",-3,.3,54.5,{title:"피난민의 기록",body:`버스는 터미널에 있다. 배터리는 서쪽 주차장 흰 승용차 트렁크에.
점화 플러그는 공사장 컨테이너에. 연료는 터미널 창고에 숨겨뒀다.

북쪽 고가도로 밑 바리케이드는 우리가 쌓았다. 붉은 드럼통을 쏘면 무너질 거다.

우리는 기다리지 못했다. 미안하다.`});const s=new T(0,1.05,51.8);t.radio(0,1,51.8),i.S.radioLoop=null,i.interact.add({pos:s,radius:2.2,prompt:()=>i.S.radioDone?null:"무전기 조작",canUse:()=>!i.S.radioDone,onUse:()=>{i.S.radioDone=!0,i.S.radioLoop&&(i.S.radioLoop.stop(),i.S.radioLoop=null),i.audio.play("radioVoice",{pos:s,vol:1}),i.showNote("무전 수신 (기록)",`"…반복한다… 북부 터미널… 45인승 버스… 정비만 하면 움직인다…

…배터리… 점화 플러그… 연료…

…북쪽 고가도로는… 막혀 있다… 폭발물로…"

(신호가 끊겼다)`),i.objIndex===0&&i.objectiveDone()}}),t.room(0,0,26,14,4.2,{mat:e.concrete,floorMat:e.tile,ceilMat:e.concreteDark,openings:{s:[{at:6,w:2},{at:18,w:2}],n:[{at:12,w:2}],e:[{at:3,w:2,bottom:1,top:2.6}],w:[{at:8,w:2,bottom:1,top:2.6}]}}),t.box(e.concreteDark,27,.35,15,0,4.3,0,{collide:!1}),t.box(e.woodDark,4,.5,.6,-6,0,1),t.box(e.woodDark,4,.5,.6,4,0,1),t.counter(-9,-4,3,1),t.pane(13,1,-2,Math.PI/2,2,1.6),t.pane(-13,1,3,Math.PI/2,2,1.6),i.pickup("ammo",-9,1.1,-4,{ammoType:"pistol",amount:12}),i.pickup("medkit",-6,.6,1,{}),t.wall(6,-7,6,-2,4.2,e.concrete,{openings:[{at:2,w:1.1}]}),t.wall(6,-2,13,-2,4.2,e.concrete,{}),t.door(6,-5,-Math.PI/2,{label:"창고 문",metal:!0}),t.crate(10,-5.5,{s:1}),t.crate(11.5,-4.5,{s:.8}),i.S.fuelItem=i.pickup("fuel",9,.5,-4,{id:"busfuel",label:"연료통",onPickup:()=>Wr(i)}),i.pickup("ammo",11.5,1.2,-4.5,{ammoType:"rifle",amount:6}),i.zombies.spawn("screamer",9,-5,{mode:"idle"}),i.zombies.spawn("walker",-5,-3,{mode:"idle"}),t.patch(50,40,e.asphalt,-48,8,.015);const r=[[-36,0,.1,e.carBlue],[-42,2,-.2,e.carRed,!0],[-50,-2,.3,e.carBlue],[-58,4,0,e.carWhite],[-38,14,.2,e.carBlue],[-46,16,-.1,e.carRed],[-56,14,.4,e.carWhite,!0],[-62,18,0,e.carBlue],[-44,24,.15,e.carWhite]];for(const[d,u,f,g,_]of r)t.car(d,u,f,{mat:g,alarm:!!_,wreck:Math.random()<.4});t.car(-52,8,.05,{mat:e.carWhite}),t.lampPost(-54,5,{on:!0}),i.S.batteryItem=i.pickup("part",-54.5,.7,8,{id:"battery",label:"배터리",onPickup:()=>Wr(i)}),i.zombies.spawn("walker",-40,8,{mode:"wander"}),i.zombies.spawn("walker",-55,18,{mode:"wander"}),i.zombies.spawn("rotten",-48,0,{mode:"wander"}),i.zombies.spawn("walker",-44,12,{mode:"lying"}),i.addTrigger(-48,8,10,()=>{i.zombies.spawn("rotten",-58,10,{mode:"suspect"}),i.zombies.spawn("walker",-40,16,{mode:"suspect"})}),t.patch(46,38,e.dirt,48,8,.015);for(const[d,u]of[[40,0],[48,0],[40,8],[48,8]])t.box(e.metalDark,.25,6,.25,d,0,u);t.box(e.wood,9,.2,2,44,3,4,{collide:!1}),t.box(e.brickGray,8,4,6,58,0,12),t.crate(38,14,{s:1.2}),t.crate(40,15,{s:1}),t.barrel(44,16,{explosive:!0}),t.barrel(52,2,{}),t.box(e.corrugatedRust,6,2.6,2.5,46,0,20),t.box(e.corrugated,6,2.6,2.5,46,0,24.5),i.S.plugItem=i.pickup("part",46,.6,22.2,{id:"plug",label:"점화 플러그",onPickup:()=>Wr(i)}),i.pickup("ammo",39,1.3,14,{ammoType:"shell",amount:5}),i.pickup("medkit",52.5,.4,3,{}),i.zombies.spawn("brute",50,16,{mode:"idle"}),i.zombies.spawn("walker",42,6,{mode:"wander"}),i.zombies.spawn("crawler",46,12,{mode:"idle"});const a=new Me;a.position.set(-6,0,-24);const o=new pt(new Et(3,2.6,9.5),e.carBlue);o.position.y=1.7,a.add(o);const l=new pt(new Et(2.8,.9,9),e.glass);l.position.y=2.6,a.add(l);for(const[d,u]of[[-1.5,3],[1.5,3],[-1.5,-3],[1.5,-3]]){const f=new pt(new ce(.5,.5,.3,8),e.tire);f.rotation.z=Math.PI/2,f.position.set(d,.5,u),a.add(f)}i.levelGroup.add(a),i.world.addBox(-6,0,-24,3.4,3.5,10,{tag:"bus"}),i.S.busPos=new T(-4,1,-24),i.interact.add({pos:i.S.busPos,radius:3.2,hold:3,prompt:()=>i.S.busReady?"버스에 타고 탈출한다":i.S.defenseStarted?null:i.S.installed?i.S.blockadeClear?"시동을 건다 (길게) — 모든 것이 몰려올 것이다":"출구가 막혀 있다 — 바리케이드를 제거하라":i.S.parts>=3?"부품 장착 (길게)":`부품이 더 필요하다 (${i.S.parts}/3)`,canUse:()=>i.S.busReady?!0:i.S.defenseStarted?!1:i.S.installed?i.S.blockadeClear?!0:"북쪽 바리케이드부터 제거해야 한다":i.S.parts>=3?!0:`부품이 더 필요하다 (${i.S.parts}/3)`,onUse:()=>{if(i.S.busReady){i.stageComplete();return}if(!i.S.installed){i.S.installed=!0,["battery","plug","busfuel"].forEach(d=>i.player.parts.delete(d)),i.notify("부품 장착 완료"),i.audio.play("lever",{vol:.9}),i.objIndex===2&&Cl(i);return}i.S.blockadeClear&&i.objIndex===3&&vg(i)}}),i.S.rubble=[];const c=(d,u,f,g,_)=>{const p=t.box(e.concreteDark,f,g,_,d,0,u);i.S.rubble.push(p)};c(-6,-52,7,2.6,3),c(2,-52.5,8,2.2,3.5),c(-2,-50,5,1.6,2.5),t.car(7,-52,.8,{mat:e.carWhite,wreck:!0}),t.car(-13,-51,2.2,{mat:e.carBlue,wreck:!0}),i.S.barrels=[t.barrel(-4,-51,{explosive:!0}),t.barrel(-1,-52,{explosive:!0}),t.barrel(-7,-52.5,{explosive:!0})],i.pickup("ammo",-14,.4,-46,{ammoType:"pistol",amount:10});const h=i.onUpdate(()=>{if(i.S.blockadeClear){i.removeUpdate(h);return}if(i.S.barrels.some(d=>d.exploded)){i.S.blockadeClear=!0,i.removeUpdate(h),i.audio.play("rubble",{pos:new T(-2,1,-52),vol:1.2,range:80});for(const f of i.S.rubble)f.userData.col&&i.world.remove(f.userData.col);let d=0;const u=i.onUpdate(f=>{d+=f;for(const g of i.S.rubble)g.position.y-=f*1.4;d>2.5&&(i.removeUpdate(u),i.S.rubble.forEach(g=>g.visible=!1))});i.notify("바리케이드가 무너졌다!"),i.objIndex===2&&Cl(i)}});t.car(-16,-18,.3,{mat:e.carRed,alarm:!0}),t.car(14,-20,-.4,{mat:e.carBlue,alarm:!0}),i.zombies.spawn("walker",-20,30,{mode:"wander"}),i.zombies.spawn("walker",20,35,{mode:"wander"}),i.zombies.spawn("walker",-15,-38,{mode:"wander"}),i.zombies.spawn("rotten",18,-30,{mode:"wander"}),i.zombies.spawn("screamer",-25,-10,{mode:"wander"}),i.zombies.spawn("walker",0,25,{mode:"lying"}),i.zombies.decor(16,0,-85,14)},objectives:[{id:"radio",text:"대피 캠프에서 무전 신호를 추적한다",enter(i){i.addTrigger(0,55,12,()=>{!i.S.radioDone&&!i.S.radioLoop&&(i.S.radioLoop=i.registerLoop(i.audio.loop("staticLoop",new T(0,1,51.8),{vol:.8,range:25})))})},skip(i){i.S.radioDone=!0}},{id:"parts",text:"버스 부품을 수집한다 (0/3) — 배터리 · 점화 플러그 · 연료",enter(i){i.saveCheckpoint()},skip(i){i.S.parts=3,["battery","plug","busfuel"].forEach(t=>i.player.parts.add(t)),[i.S.batteryItem,i.S.plugItem,i.S.fuelItem].forEach(t=>t&&t.remove())}},{id:"clear",text:"부품을 장착하고, 북쪽 바리케이드를 제거한다 (붉은 드럼통)",enter(i){i.saveCheckpoint()},skip(i){i.S.installed=!0,i.S.blockadeClear=!0;for(const t of i.S.rubble)t.userData.col&&i.world.remove(t.userData.col),t.visible=!1;i.S.barrels.forEach(t=>{t.exploded=!0,t.mesh.visible=!1})}},{id:"finale",text:"버스 시동을 걸고 — 마지막 무리를 버텨낸다",enter(i){i.saveCheckpoint(i.S.busPos),i.zombies.setTrickle({interval:30,types:["walker"],maxAlive:6,minDist:35,maxDist:55})},skip(i){}}]};function Wr(i){i.S.parts++;const t=`버스 부품을 수집한다 (${i.S.parts}/3)`;i.objIndex===1&&(i.hud.setObjective(t),i.currentObjectiveText=t,i.S.parts>=3&&i.objectiveDone()),i.emitNoise(i.player.pos,18)}function Cl(i){i.S.installed&&i.S.blockadeClear&&i.objIndex===2&&i.objectiveDone()}function vg(i){i.S.defenseStarted=!0,i.S.defenseLeft=75,i.registerLoop(i.audio.loop("engine",i.S.busPos,{vol:.8,range:70})),i.emitNoise(i.S.busPos,90),i.notify("시동이 걸렸다 — 도시 전체가 들었다"),i.audio.play("scream",{pos:new T(0,1,-40),vol:1.1,range:80}),i.zombies.wave(8,i.S.busPos.x,i.S.busPos.z,38,["walker","walker","rotten"]),i.after(18,()=>{i.S.defenseStarted&&i.zombies.wave(7,i.S.busPos.x,i.S.busPos.z,40,["walker","rotten","screamer"])}),i.after(38,()=>{i.S.defenseStarted&&i.zombies.wave(7,i.S.busPos.x,i.S.busPos.z,42,["walker","rotten","brute"])}),i.after(58,()=>{i.S.defenseStarted&&i.zombies.wave(5,i.S.busPos.x,i.S.busPos.z,40,["rotten","crawler"])});const t=i.onUpdate(e=>{i.S.defenseLeft-=e;const n=Math.max(0,Math.ceil(i.S.defenseLeft));i.hud.setObjective(`버스 예열 중 — ${n}초 버틴다 (차량 경보로 유인 가능)`,!1),i.currentObjectiveText=`버스 예열 중 — ${n}초`,i.S.defenseLeft<=0&&(i.removeUpdate(t),i.S.defenseStarted=!1,i.S.busReady=!0,i.hud.setObjective("버스에 타고 도시를 벗어난다"),i.currentObjectiveText="버스에 타고 도시를 벗어난다",i.notify("버스가 준비됐다 — 탑승하라!"))})}const xg=[hg,dg,fg,pg,_g];class yg{constructor(t){this.canvas=t,this.settings=new N0,this.save=new F0,this.diff=Vn.normal,this.state="menu",this.godmode=!1,this.renderer=new $m({canvas:t,antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.outputColorSpace=ze,this.scene=new Zm,this.camera=new Le(this.settings.data.fov,window.innerWidth/window.innerHeight,.08,320),this.scene.add(this.camera),this.levelGroup=new Me,this.scene.add(this.levelGroup),window.addEventListener("resize",()=>{this.camera.aspect=window.innerWidth/window.innerHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(window.innerWidth,window.innerHeight)}),this.input=new O0(t),this.audio=new B0(this.settings),this.world=new V0,this.mats=W0(),this.kit=new X0(this),this.particles=new q0(this.scene,this.settings),this.hud=new lg(this),this.player=new K0(this),this.weapons=new $0(this),this.zombies=new ag(this),this.interact=new og(this),this.menus=new cg(this),this.stageIndex=1,this.level=null,this.objIndex=0,this.currentObjectiveText="",this.updates=[],this.triggers=[],this.timers=[],this.partLabels={},this.metalFloor=!1,this.baseMusic=0,this.stageStartTime=0,this.elapsed=0,this._fogBase=null,this.applyPerf(),this._wireMenus(),this._wireLock(),this.menus.refreshMain(),this.menus.show("menu-main"),this._last=performance.now(),this._raf=this._raf??requestAnimationFrame(e=>this._loop(e))}get paused(){return this.state!=="playing"}applyPerf(){const t=this.settings.perf;this.renderer.setPixelRatio(t.pixelRatio),this.renderer.shadowMap.enabled=t.shadows,this.renderer.shadowMap.type=na,this._fogBase&&this.scene.fog&&(this.scene.fog.far=this._fogBase.far*t.fogMul)}_wireMenus(){const t=this.menus;t.on.newGame=e=>{this.diff=Vn[e]||Vn.normal,this.save.save({stage:1,difficulty:this.diff.id,checkpoint:null}),this.player.fullReset(),this.weapons.reset(),this.loadStage(1)},t.on.continue=()=>{const e=this.save.load();e&&(this.diff=Vn[e.difficulty]||Vn.normal,this.player.fullReset(),this.weapons.reset(),this.loadStage(e.stage,{fromCheckpoint:!!e.checkpoint}))},t.on.stage=e=>{this.diff=Vn[t.selectedDiff]||Vn.normal,this.save.save({stage:e,difficulty:this.diff.id,checkpoint:null}),this.player.fullReset(),this.weapons.reset(),this.loadStage(e)},t.on.resume=()=>this.resume(),t.on.restartCp=()=>{const e=this.save.load();this.player.fullReset(),this.weapons.reset(),this.loadStage(this.stageIndex,{fromCheckpoint:!!(e&&e.checkpoint&&e.stage===this.stageIndex)})},t.on.quitToMenu=()=>{this.unloadLevel(),this.state="menu",this.input.wantLock=!1,this.input.releaseLock(),this.hud.show(!1),this.audio.setMusicIntensity(0),this.audio.ambience(null),t.refreshMain(),t.show("menu-main"),this.hud.fade(0)},t.on.nextStage=()=>{this.stageIndex>=5?this._showEnding():this.loadStage(this.stageIndex+1)}}_wireLock(){this.input.onLockChange=t=>{!t&&this.state==="playing"&&!this.hud.noteOpen&&this.pause()}}pause(){this.state==="playing"&&(this.state="paused",this.input.releaseLock(),this.menus.show("screen-pause"))}resume(){this.state==="paused"&&(this.state="playing",this.menus.hideAll(),this.input.requestLock())}unloadLevel(){this.interact.clear(),this.zombies.clear(),this.world.clear(),this.kit.reset(),this.updates.length=0,this.triggers.length=0,this.timers.length=0,this.partLabels={},this.metalFloor=!1;const t=[];this.levelGroup.traverse(e=>{e.geometry&&t.push(e.geometry)}),t.forEach(e=>e.dispose()),this.scene.remove(this.levelGroup),this.levelGroup=new Me,this.scene.add(this.levelGroup),this._activeLoops?.forEach(e=>e.stop()),this._activeLoops=[]}loadStage(t,{fromCheckpoint:e=!1}={}){this.unloadLevel(),this.menus.hideAll(),this.stageIndex=t;const n=xg[t-1];this.level=n,this._activeLoops=[];const s=new Rt(n.fog.color);this.scene.fog=new da(s,n.fog.near,n.fog.far),this._fogBase={near:n.fog.near,far:n.fog.far},this.scene.background=s,this.renderer.setClearColor(s);const r=new v0(n.hemi[0],n.hemi[1],n.hemi[2]);if(this.levelGroup.add(r),n.sun){const c=new b0(n.sun.color,n.sun.intensity);c.position.set(n.sun.dir[0],n.sun.dir[1],n.sun.dir[2]),this.settings.perf.shadows&&(c.castShadow=!0,c.shadow.mapSize.set(1024,1024),c.shadow.camera.left=-60,c.shadow.camera.right=60,c.shadow.camera.top=60,c.shadow.camera.bottom=-60),this.levelGroup.add(c)}this.applyPerf(),this.player.reset(n.playerSpawn),this.player.yaw=n.playerSpawn.yaw||0,this.objIndex=0,n.build(this);let a=!1;if(e){const c=this.save.load();if(c&&c.checkpoint&&c.stage===t){const h=c.checkpoint;for(let d=0;d<h.obj&&d<n.objectives.length;d++)n.objectives[d].skip?.(this);this.objIndex=Math.min(h.obj,n.objectives.length-1),this.player.restore(h.player),this.player.pos.set(h.pos[0],h.pos[1],h.pos[2]),this.player.yaw=h.yaw||0,a=!0}}const o=n.objectives[this.objIndex];this.currentObjectiveText=o.text,o.enter?.(this),this.hud.setObjective(o.text,!1),a||this._writeCheckpoint(),this.stageStartTime=this.elapsed,this.zombies.stageKills=0,this.weapons.shotsFired=0,this.audio.ambience(n.ambience),this.baseMusic=n.music||0,this.hud.fade(1,!0);const l=()=>{this.menus.hideAll(),this.hud.show(!0),this.hud.fade(0),this.state="playing",this.input.wantLock=!0,this.audio.ensure(),this.input.requestLock()};a?l():(this.state="intro",this.menus.showIntro(n,l))}objectiveDone(){const t=this.level;if(this.objIndex++,this.objIndex>=t.objectives.length){this.stageComplete();return}const e=t.objectives[this.objIndex];this.currentObjectiveText=e.text,this.hud.setObjective(e.text),this.audio.play("beep",{vol:.5}),this.notify("목표 갱신"),e.enter?.(this)}_writeCheckpoint(t=null){const e=t||this.player.pos;this.save.save({stage:this.stageIndex,difficulty:this.diff.id,checkpoint:{obj:this.objIndex,pos:[e.x,e.y+.1,e.z],yaw:this.player.yaw,player:this.player.snapshot()}})}saveCheckpoint(t=null){this._writeCheckpoint(t),this.audio.play("checkpoint",{vol:.7}),this.notify("체크포인트 저장됨")}gameOver(){this.state==="playing"&&(this.state="dead",this.input.wantLock=!1,this.input.releaseLock(),this.audio.setMusicIntensity(0),this.hud.fade(.6),setTimeout(()=>{this.state==="dead"&&this.menus.showDead()},1200))}stageComplete(){if(this.state!=="playing")return;this.state="clear",this.input.wantLock=!1,this.input.releaseLock(),this.audio.play("sting",{vol:.9}),this.audio.setMusicIntensity(0),this.save.unlock(this.stageIndex+1),this.stageIndex<5&&this.save.save({stage:this.stageIndex+1,difficulty:this.diff.id,checkpoint:null});const t=Math.round(this.elapsed-this.stageStartTime),e=Math.floor(t/60),n=String(t%60).padStart(2,"0"),s=`${this.level.name}

생존 시간  ${e}:${n}
처치한 감염체  ${this.zombies.stageKills}
사용한 탄약  ${this.weapons.shotsFired}발`;this.hud.show(!1),setTimeout(()=>this.menus.showClear(s),800),this.hud.fade(.4)}_showEnding(){this.state="ending",this.save.clear();const t=["버스는 새벽 안개를 뚫고 도시를 벗어났다.","백미러 속 지평선에는 아직도 연기가 오르고 있었다.","라디오는 여전히 같은 문장만 반복한다.",'"…남부 방어선은… 유지되고… 있습니다…"',"아무도 그 말을 믿지 않았다.","하지만 바퀴는 굴러간다. 아직은.","","— DEAD FIELDS —"].join(`
`);this.menus.showEnding(t)}onUpdate(t){return this.updates.push(t),t}removeUpdate(t){const e=this.updates.indexOf(t);e>=0&&this.updates.splice(e,1)}after(t,e){this.timers.push({t,fn:e})}addTrigger(t,e,n,s,{once:r=!0}={}){this.triggers.push({x:t,z:e,r2:n*n,fn:s,once:r,done:!1})}notify(t){this.hud.notify(t)}showNote(t,e){this.hud.showNote(t,e)}emitNoise(t,e){this.zombies.onNoise(t,e)}countN(t){return Math.max(1,Math.round(t*this.diff.countMul))}pickup(t,e,n,s,r){return this.interact.pickup(t,e,n,s,r)}registerLoop(t){return this._activeLoops.push(t),t}explode(t,e,n){this.particles.explosionFx(t),this.audio.play("explosion",{pos:t,vol:1.3,range:90}),this.emitNoise(t,60);for(const r of this.zombies.list){if(!r.alive)continue;const a=r.pos.distanceTo(t);if(a<e){const o=new T().subVectors(r.pos,t).setY(0).normalize();r.damage(n*(1-a/e),{dir:o,knock:8,stagger:1,point:r.center,source:"explosion"})}}const s=this.player.pos.distanceTo(t);s<e?(this.player.damage(n*.5*(1-s/e),t),this.player.shake=1):s<e*3&&(this.player.shake=Math.min(1,this.player.shake+.5));for(const r of[...this.world.colliders])if(r.tag==="barrel"&&r.onDamage){const a=new T((r.min.x+r.max.x)/2,.5,(r.min.z+r.max.z)/2);a.distanceTo(t)<e+1&&a.distanceTo(t)>.1&&this.after(.18,()=>r.onDamage(999))}}_loop(t){requestAnimationFrame(n=>this._loop(n));let e=Math.min(.05,(t-this._last)/1e3);if(this._last=t,this.elapsed+=e,this.state==="playing"){const n=this.hud.noteOpen;if(this.hud.noteOpen&&(this.input.pressed("KeyE")||this.input.pressed("Escape"))&&(this.hud.hideNote(),this.input.just.delete("KeyE")),this.input.down("Tab")?this.hud.showTab():this.hud.hideTab(),!n){this.player.update(e),this.weapons.update(e),this.zombies.update(e),this.interact.update(e),this.kit.update(e);for(let a=this.timers.length-1;a>=0;a--)if(this.timers[a].t-=e,this.timers[a].t<=0){const o=this.timers[a].fn;this.timers.splice(a,1),o()}const s=this.player.pos;for(const a of this.triggers){if(a.done)continue;const o=s.x-a.x,l=s.z-a.z;o*o+l*l<a.r2&&(a.once&&(a.done=!0),a.fn())}for(const a of[...this.updates])a(e);let r=0;for(const a of this.zombies.list)a.alive&&(a.state==="chase"||a.state==="attack"||a.state==="lunge")&&a.pos.distanceToSquared(s)<30*30&&r++;this.audio.setMusicIntensity(Math.max(this.baseMusic,Math.min(1,r/5)))}this.hud.update(e)}this.particles.update(e),this.audio.update(e),this.renderer.render(this.scene,this.camera),this.input.endFrame()}}const Mg=document.getElementById("c"),Sg=new yg(Mg);window.game=Sg;export{Qm as $,Ag as A,De as B,Rt as C,b0 as D,pt as E,Lg as F,Rg as G,ac as H,n0 as I,Cg as J,s0 as K,ji as L,Pg as M,Ji as N,ae as O,Gs as P,fn as Q,Ls as R,ze as S,bg as T,Me as U,Ct as V,Le as W,pe as X,$l as Y,rc as Z,cl as _,Tg as a,Ds as a0,$r as a1,ic as a2,Se as a3,Hs as a4,Vs as a5,Zs as a6,Jt as a7,An as a8,$s as a9,Ln as aa,pn as ab,kg as ac,wg as b,Dg as c,Pn as d,y0 as e,Ot as f,T as g,Qo as h,Ig as i,Ug as j,Eg as k,bn as l,ir as m,eh as n,We as o,Ce as p,Kr as q,Yn as r,oc as s,In as t,i0 as u,a0 as v,dn as w,Pi as x,Zt as y,Fe as z};
