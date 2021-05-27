import React from 'react';

class DynamicHrefLink extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      href: '#',
    };
    this.openHref = this.openHref.bind(this);
    this.anchorRef = React.createRef();
    this.getHref = this.setAnchorRef.bind(this);
    this.getLink = this.getLink.bind(this);
  }

  setAnchorRef(node) {
    this.anchorRef = node;
  }

  async openHref(e) {
    const { href } = this.state;
    if (href === '#') {
      e.preventDefault();
      const imageLink = await this.getLink();
      if (imageLink !== '') {
        this.setState(
          {
            href: imageLink,
          },
          () => {
            this.anchorRef.current.click();
          }
        );
      }
      return false;
    }
    return true;
  }

  timeout(ms) {
    return new Promise(resolve => {
      setTimeout(
        () =>
          resolve({
            drinks: [
              {
                strDrinkThumb:
                  'https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg',
              },
              {
                strDrinkThumb:
                  'https://www.thecocktaildb.com/images/media/drink/bry4qh1582751040.jpg',
              },
              {
                strDrinkThumb:
                  'https://www.thecocktaildb.com/images/media/drink/loezxn1504373874.jpg',
              },
              {
                strDrinkThumb:
                  'https://www.thecocktaildb.com/images/media/drink/srpxxp1441209622.jpg',
              },
              {
                strDrinkThumb:
                  'https://www.thecocktaildb.com/images/media/drink/tqyrpw1439905311.jpg',
              },
              {
                strDrinkThumb:
                  'https://www.thecocktaildb.com/images/media/drink/dztcv51598717861.jpg',
              },
            ],
          }),
        ms
      );
    });
  }

  getLink = async () => {
    try {
      const json = await this.timeout(1000);
      return json.drinks[Math.floor(Math.random() * json.drinks.length)]
        .strDrinkThumb;
    } catch (err) {
      console.log(err);
    }
    return '';
  };

  render() {
    const { href } = this.state;
    return (
      <a
        ref={this.anchorRef}
        href={href}
        onClick={this.openHref}
        target="_blank"
        rel="noopener noreferrer"
      >
        Open Random Margarita
      </a>
    );
  }
}

export default DynamicHrefLink;
