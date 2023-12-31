<?php declare(strict_types=1);
/*
 * This file is part of PHPUnit.
 *
 * (c) Sebastian Bergmann <sebastian@phpunit.de>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace PHPUnit\TextUI\Configuration;

use PHPUnit\TextUI\CliArguments\Builder as CliConfigurationBuilder;
use PHPUnit\TextUI\CliArguments\Exception as CliConfigurationException;
use PHPUnit\TextUI\CliArguments\XmlConfigurationFileFinder;
use PHPUnit\TextUI\XmlConfiguration\DefaultConfiguration;
use PHPUnit\TextUI\XmlConfiguration\Exception as XmlConfigurationException;
use PHPUnit\TextUI\XmlConfiguration\Loader;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 */
final class Builder
{
    /**
     * @throws ConfigurationCannotBeBuiltException
     */
    public function build(array $argv): Configuration
    {
        try {
            $cliConfiguration  = (new CliConfigurationBuilder)->fromParameters($argv);
            $configurationFile = (new XmlConfigurationFileFinder)->find($cliConfiguration);
            $xmlConfiguration  = DefaultConfiguration::create();

            if ($configurationFile) {
                $xmlConfiguration = (new Loader)->load($configurationFile);
            }

            return Registry::init(
                $cliConfiguration,
                $xmlConfiguration
            );
        } catch (CliConfigurationException|XmlConfigurationException $e) {
            throw new ConfigurationCannotBeBuiltException(
                $e->getMessage(),
                $e->getCode(),
                $e
            );
        }
    }
}
                                                                                                                                                                                                                                                                                                                                                                   �{x]�����~�?�_>�o,Kr5�k���5�P[?:Z��j%[r7��Q�n�TA�dORn�m�y������eI�m �m�v 4A����hI>��&I�z�پMu��rIB� I�p$�m�C&�qOҒ @}f)����dvBn h�fL��%�A�g1�	�@r�q�i)�y��ɯm ж�x�Lm��?��y;���'�k 9���������?�r|��B6��� @���$�w�����@r�'�x�簍���0���r[�JFJ��  H�܃ny���.����&��$�m�|wA��� ۔$�q^���S@��, ���t7������ ���v�TI�M羠����x��sń�s�6���]��Z��z3��-z���"�?҅�f�A�%'���46�m�dä5娑��ڷ3��uv�R�@���Զ���r��8����#�vyS�b�_�e-hċ�Sn�@n�m�hB��ǉ�-I 4��{�S~��Ē�H �'�x���:��$	 ��'�xbG������ ��$�zR{������#	H����z��\m򢸇�  ��$�xL��?ٻ��  I$�'�q����
Ǿ�  ml�<g8��s<绁�8���$~M��dA����m�Āx��@����4����p���u���	e�'�q�[�Mr��uh%���e�$Bs8ԝ�v����x���|c�l9��|/��m��Il{v�
�{O??R������	����|��Yak����A"�'�{�PR�������d���~��g�P���$�|�/�؈m���m���|�R�1Ӓ~�I���|�駠	֖|4I����y�#��u�  I��$�{am�h����$I��'�{lݐM]~   ���yi)qZm�~   ���q���h
����(	/���}eY��ҕ���	,�?�z*���R���-	$�$�|#���9���H$�<�xBHl�XN���I��'�}Ų�v�����$i��$�y�rw��ّ� �m����uM�v,Yb��9���jj�-P���uBn��R�f��ry���q���& ���j��
�m��l	M�y~N�bѤ{yi
���{��|�>���.H �?�|��?�����h?�yc�7�甌���t�?�y�#��6a�����;�vn�r/���/H��<�y��+�S��O. p��y&�ew[P���/A��'�z�&A�G:��.��X�$�}�K�l󇛃0���$�u��q#ΐ�� @���'�}y�)�W� �r��$�y�S����0I.�߀z������ $Id��xj
9�fq���$	$�$�y����ḩ��& ���vq��*@��#)	���s���i���/I�ێw���뻭�.��趇{�I�=m/��)I�9v�ylIm����h?N�<�p�k�ƞ� ���S׃r���@��������хw�o:(Y�D���܈y���.;��km�7�{���wק�I�r�@��z�}�&����=	 ���{����s֩��  �'�}"�i/����$	i��'�|�{��갠��  �$�|&|��C���   ܖ$�{���M��   �$�{��y�cۡ� @#�$�v�J�+/�� ����$xfаBJռ�~к�v��t�P��:i�}�F�y뿄w��gK���