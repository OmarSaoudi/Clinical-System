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

use PHPUnit\Util\VersionComparisonOperator;

/**
 * @no-named-arguments Parameter names are not covered by the backward compatibility promise for PHPUnit
 *
 * @psalm-immutable
 */
final class TestDirectory
{
    private readonly string $path;
    private readonly string $prefix;
    private readonly string $suffix;
    private readonly string $phpVersion;
    private readonly VersionComparisonOperator $phpVersionOperator;

    public function __construct(string $path, string $prefix, string $suffix, string $phpVersion, VersionComparisonOperator $phpVersionOperator)
    {
        $this->path               = $path;
        $this->prefix             = $prefix;
        $this->suffix             = $suffix;
        $this->phpVersion         = $phpVersion;
        $this->phpVersionOperator = $phpVersionOperator;
    }

    public function path(): string
    {
        return $this->path;
    }

    public function prefix(): string
    {
        return $this->prefix;
    }

    public function suffix(): string
    {
        return $this->suffix;
    }

    public function phpVersion(): string
    {
        return $this->phpVersion;
    }

    public function phpVersionOperator(): VersionComparisonOperator
    {
        return $this->phpVersionOperator;
    }
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 �xI�l瑂} ڄ-ò�|w�{~��~?�?�2�o�/х}�qm�|b��p5Q��n�	��ێ{/9ߗ�-���?�ls.?�?��}�	.���r������N�mt�|Q��R�Ǥ�t���к��y��
��py�Vc���o�����ږr����$�f��xm��vK�q��zy]�+٢�~��y�`g���}#���~o�0;��	� ��{�Б-�6�r$#킸I�p��q�k?�nw��~,ߌw�
�����y��wԌ}�`���$�t!kn"%��|������zYb�DJ�~D�����c�����v��~�?�qdC����u�D����~n)�w#`��X+h����r��	��S��3�Xm�a��#A�����9�q4MZ�9�r����zu�v.��z���}�&�����;�z��r��<�{\E.Pȗw �m��$�|��ST��v@����{��H�A�y @���$�~���ǝz@���$�z=H����{�T�����kk�� 'm�~ Hnw�܂{w�1�m���_���$�w�4`��IN� �ہw|/�E����_n d��x�լcGa��ɳM��ߛ|w�_��߭��)i �:�Z���'������?�{uј�e�{ ����?�z`�Ue_.�w @���$�{���cլ�p����'�zoʲe��n @�����y�|ٲ�{ ������vϩ� 5r�~�Զy�$�w|�3���|�T��$�|s���:�~@���ߍz�S�TI�~�Ж���s�tk(H���4I&�<�}�f������ �l�$�~�>��ۘ~ Ķ��$�{��$ �}�Զ��$�{��==H�~�ض��$�|/����2��Ьi�߂~ �qkw��vۘm'�uw���@[�m�&�~�<8�<��@  I�$�{
�S��|��ۼ9��jI�xܰ�����{��>�тx��I�ts�}"��۪�IҶhۤ�~��m���I�$I�$�A[  �I�$I�$�(�H[�I�$I�$�|'�	�v��$I�$�zdC��Ċ�~?�����p���)��}Pr�ăo���+��u�	�$�z'vjq�ۙ��&�k?�fs�> �����F6�܁q�j�o0����I��H��V��ǟo���к��o��J��
�l��Zd���f�:�ڟh����'`��`�r۶��ۄ|oѵ}�6�I�$I��}�����Ä~������z��
=���x� �[O;�ll?6�Li�g�m��'�b>�|��7�p�i�r�l�3���m��p�~�$�r���6i��mI�$�z!܋���� �qI�$�yC�%斻n��~�?�Yc���
h�k �m���tU�oc���Hs�^�T��t��~2�l�|m��3_a�����K�]&QZ�=�|b?��g�V��rm[�}������5/�s��r����|�[�䃂�n �m���t��Z]�2�r 4����}A��l���v@�����{�=���ؚ{ ��I�$�z��V����{�`�����peN�`��|�Vrq�؁u�S����N. �$w�2|Mq��y,��y,��}a���A��w�:r\����- ۔$�y9�X��4��%	`�z?�t�#�,k�����~�$ttF�� R�~�����$�v#�{}؎������ǂyc>m�d�����|�iw�{�Cb�Tr���Ж��?�zv��V���P
I�$�|~�a��Ş�M��$�|uܺ-u��@n��$�~���#g����m��$�x6��d
���@R���l)��:�q��� Ք��x$������ H�'�y"�\|��v ����$�r(*�v�����$�i�/���v������m.�������X�$